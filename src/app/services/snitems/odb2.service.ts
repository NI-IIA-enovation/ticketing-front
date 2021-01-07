import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { SNItemFactory } from './models/snitemfactory';
import { SNItem } from './models/snitem';

export enum ODBActivityType {
  create,
  update,
  delete,
  select
}

export enum ODBActivityStatus {
  starting,
  started,
  ending,
  ended,
  error,
  warning
}

export class ODBActivity {
  constructor(
    public type: ODBActivityType,
    public status: ODBActivityStatus,
    public error: boolean,
    public message: string,
  ) {}
}

export enum ODBConnectionStatus {
  online = 'online',
  offline = 'offline'
}

@Injectable({
  providedIn: 'root'
})
export class ODB2Service {

  private static instance: ODB2Service = null;

  onlineStatus: Observable<Event>;
  offlineStatus: Observable<Event>;
  public status = ODBConnectionStatus.online;

  private url = '';
  public callurl = '';
  private sharedkey = '';
  private bearer = '';

  private authenticated = false;

  // Debug
  private debugMode = false;

  // Cache params
  private deep$ = true;
  private deeplevels$ = 9;
  private deepItems$ = [];

  // Item cache
  private itemsingleton: Map<string, SNItem> = new Map();
  private itemsById: Map<number, SNItem> = new Map();
  private itemsByKey: Map<string, SNItem[]> = new Map();

  @Output() activity: EventEmitter<ODBActivity> = new EventEmitter();
  @Output() itemStored: EventEmitter<SNItem> = new EventEmitter();
  @Output() connectionStatus: EventEmitter<ODBConnectionStatus> = new EventEmitter();

  constructor(private http: HttpClient, private factory: SNItemFactory) {
    this.sharedkey = environment.odbsharedkey;
    this.url = environment.odburl;
    this.callurl = this.url + '/api/v1';

    this.onlineStatus = fromEvent(window, 'online');
    this.offlineStatus = fromEvent(window, 'offline');
    this.status = (navigator.onLine) ? ODBConnectionStatus.online : ODBConnectionStatus.offline;

    this.onlineStatus.subscribe(event => {
      this.connectionStatus.emit(ODBConnectionStatus.online);
      console.log('Online event', event);
    });
    this.offlineStatus.subscribe(event => {
      this.connectionStatus.emit(ODBConnectionStatus.offline);
      console.log('Offline event', event);
    });

    ODB2Service.instance = this;
  }

  public static getInstance(): ODB2Service {
    return ODB2Service.instance;
  }

  auth() {
    // Try to authenticate with sharedkey and/or user/password
    return false;
  }

  set debug(flag) {
    this.debugMode = flag;
  }

  get debug() {
    return this.debugMode;
  }

  set deep(flag) {
    this.deep$ = flag;
  }

  set deepLevel(flag) {
    this.deeplevels$ = flag;
  }

  set deepItems(items) {
    this.deepItems$ = items;
  }

  private deepParams(itemkey) {
    if (this.deepItems$.indexOf(itemkey) !== -1) {
      const queryparams: [string, string][] = [['deep', this.deep$.toString()], ['deeplevels', this.deeplevels$.toString()]];
      return queryparams;
    }
    return [];
  }

  createItem(item): Observable<SNItem> {
    const body = {
      item
    };
    this.activity.emit(new ODBActivity(
      ODBActivityType.create,
      ODBActivityStatus.starting,
      false,
      ''
    ));
    return this.call('/item', [], JSON.stringify(body), 'post', 'item').pipe(map(result => {
      this.activity.emit(new ODBActivity(
        ODBActivityType.create,
        ODBActivityStatus.ended,
        false,
        ''
      ));
      if (result instanceof SNItem) {
        return result;
      }
      this.activity.emit(new ODBActivity(
        ODBActivityType.create,
        ODBActivityStatus.error,
        true,
        'the result is not an SNItem or an Error'
      ));
      throwError('the result is not an SNItem or an Error');
    }));
  }

  itemById(itemid: number): Observable<SNItem> {
    return new Observable(observer => {
      if (this.itemsById.has(itemid)) {
        observer.next(this.itemsById.get(itemid));
      } else {
        this.call('/item/id/' + itemid, [], '', 'get', 'item').subscribe(result => {
          if (result instanceof SNItem) {
            // Store this item in cache
            if (!this.itemsById.has(result.ID)) {
              this.itemsById.set(result.ID, result);
              this.itemStored.emit(result);
            }
            observer.next(result);
          }
          throwError('the result is not an SNItem or an Error');
        });
      }
    });
  }

  itemById$(itemid: number): SNItem {
    if (this.itemsById.has(itemid)) {
      return this.itemsById.get(itemid);
    } else {
      return null;
    }
  }

  itemByKey(itemkey: string, singleton = false): Observable<SNItem | SNItem[]> {
    const queryparams = this.deepParams(itemkey);
    if (singleton) {
      if (this.itemsingleton.has(itemkey)) {
        return new Observable(observer => {
          observer.next(this.itemsingleton.get(itemkey));
        });
      }
      return this.call('/item/singleton/' + itemkey, queryparams, '', 'get', 'item').pipe(map(result => {
        if (result instanceof SNItem) {
          this.itemsingleton.set(itemkey, result);
          return result;
        }
        throwError('the result is not an SNItem or an Error');
      }));
    } else {
      if (this.itemsByKey.has(itemkey)) {
        return new Observable(observer => {
          observer.next(this.itemsByKey.get(itemkey));
        });
      }
      return this.call('/item/key/' + itemkey, queryparams, '', 'get', 'items').pipe(map(results => {
        if (results instanceof Array) {
          if (!this.itemsByKey.has(itemkey)) {
            this.itemsByKey.set(itemkey, []);
          }
          results.forEach(item => {
            if (item instanceof SNItem) {
              this.itemsById.set(item.ID, item);
              this.itemStored.emit(item);
              this.itemsByKey.get(itemkey).push(item);
            }
          });
          return results;
        }
        throwError('the result is not an SNItem or an Error');
      }));
    }
  }

  singleton(itemkey: string): Observable<SNItem> {
    return this.itemByKey(itemkey, true) as Observable<SNItem>;
  }

  addChild(parent: SNItem, child: SNItem): Observable<SNItem> {
    if (child.ID !== 0) {
      // Just add this child
      return new Observable(observer => {
        this.call('/item/id/' + parent.ID + '/child/id/' + child.ID, [], '', 'post', 'child').subscribe(result => {
          console.log('child added', result);
          if (typeof(result.child) !== 'undefined') {
            observer.next(this.factory.itemFromJson(result.child));
          } else {
            console.log('child is not a SNItem');
            observer.error('the result is not an SNItem or an Error');
          }
        });
      });
    }
    // create and add child
    return new Observable(observer => {
      const itemJson = child.toJson();
      this.call('/item/id/' + parent.ID + '/child', [], '{"child":' + itemJson + '}', 'post', 'child').subscribe(result => {
        console.log('child added', result);
        if (typeof(result.child) !== 'undefined') {
          const newchild = this.factory.itemFromJson(result.child);
          // Add to cache
          this.itemsById.set(newchild.ID, newchild);
          observer.next(newchild);
        } else {
          console.log('child is not a SNItem');
          observer.error('the result is not an SNItem or an Error');
        }
      });
    });
  }

  addParent(child: SNItem, parent: SNItem): Observable<SNItem> {
    if (parent.ID !== 0) {
      return new Observable(observer => {
        // Just add this parent
        this.call('/item/id/' + child.ID + '/parent/id/' + parent.ID, [], '', 'post', 'parent').subscribe(result => {
          console.log('parent added', result);
          if (typeof(result.parent) !== 'undefined') {
            observer.next(this.factory.itemFromJson(result.parent));
          } else {
            console.log('parent is not a SNItem');
            observer.error('the result is not an SNItem or an Error');
          }
        });
      });
    }
    // create and add parent
    const body = {
      parent
    };
    return new Observable(observer => {
      this.call('/item/id/' + child.ID + '/parent', [], JSON.stringify(body), 'post', 'parent').subscribe(result => {
        console.log('parent added', result);
        if (typeof(result.parent) !== 'undefined') {
          observer.next(this.factory.itemFromJson(result.parent));
        } else {
          console.log('parent is not a SNItem');
          observer.error('the result is not an SNItem or an Error');
        }
      });
    });
  }

  removeChild(parent: SNItem, child: SNItem, link?: boolean): Observable<SNItem> {
    if (!!link && link === true) {
      // Remove only link
      return new Observable(observer => {
        this.call('/item/id/' + parent.ID + '/child/link/id/' + child.ID, [], '', 'delete', 'child').subscribe(result => {
          if (typeof(result.child) !== 'undefined') {
            observer.next(this.factory.itemFromJson(result.child));
          } else {
            observer.error('the result is not an SNItem or an Error');
          }
        });
      });
    }
    return new Observable(observer => {
      this.call('/item/id/' + parent.ID + '/child/id/' + child.ID, [], '', 'delete', 'child').subscribe(result => {
        if (typeof(result.child) !== 'undefined') {
          observer.next(this.factory.itemFromJson(result.child));
        } else {
          observer.error('the result is not an SNItem or an Error');
        }
      });
    });
  }

  childs(item: SNItem, childsKey?: string): Observable<SNItem[]> {
    return new Observable(observer => {
      const queryparams = this.deepParams(childsKey);
      if (!!childsKey) {
//        console.log('calling call');
          this.call('/item/id/' + item.ID + '/childs/key/' + encodeURI(childsKey), queryparams, '', 'get', 'childs').subscribe(results => {
//          console.log('return from call');
          if (results instanceof Array) {
            // Store these items in cache
            results.forEach(result => {
              if (!this.itemsById.has(result.ID)) {
                this.itemsById.set(result.ID, result);
                this.itemStored.emit(item);
              }
            });
            observer.next(results);
          } else {
            observer.next([]);
          }
        }, error => {
          console.log('call to call failed', error);
        }, () => {
          console.log('call to call complete');
        });
      } else {
        this.call('/item/id/' + item.ID + '/childs', queryparams, '', 'get', 'childs').subscribe(results => {
          if (results instanceof Array) {
            observer.next(results);
          } else {
            observer.next([]);
          }
        });
      }
    });
  }

  parents(item: SNItem, parentsKey?: string): Observable<SNItem[]> {
    if (!!parentsKey) {
      return this.call('/item/id/' + item.ID + '/parents/key/' + encodeURI(parentsKey), [], '', 'get', 'parents').pipe(map(results => {
        if (results instanceof Array) {
          return results;
        }
        return [];
      }));
    }
    return this.call('/item/id/' + item.ID + '/parents', [], '', 'get', 'parents').pipe(map(results => {
      if (results instanceof Array) {
        return results;
      }
      return [];
    }));
  }

  update(item: SNItem): Observable<SNItem> {
    this.activity.emit(new ODBActivity(
      ODBActivityType.update,
      ODBActivityStatus.starting,
      false,
      ''
    ));
    return new Observable(observer => {
      this.call('/item/id/' + item.ID, [], item.toJson(), 'put', 'item').subscribe(result => {
        this.activity.emit(new ODBActivity(
          ODBActivityType.update,
          ODBActivityStatus.ended,
          false,
          ''
        ));
        if (typeof(result.item) !== 'undefined') {
          observer.next(this.factory.itemFromJson(result.item));
        } else {
          this.activity.emit(new ODBActivity(
            ODBActivityType.update,
            ODBActivityStatus.error,
            true,
            'item is not a SNItem'
          ));
          console.log('item is not a SNItem');
          observer.error('the result is not an SNItem or an Error');
        }
      }, error => {
        this.activity.emit(new ODBActivity(
          ODBActivityType.update,
          ODBActivityStatus.error,
          true,
          error.message
        ));
        observer.error(error);
      });
    });
  }

  oquery(query: string): Observable<SNItem | SNItem[]> {
    return this.call('/item/oquery', [['q', query]], '', 'get', 'items').pipe(map(results => {
      if (results instanceof Array) {
        // results.forEach(item => {
        //   if (item instanceof SNItem) {
        //     this.itemsById.set(item.ID, item);
        //     this.itemStored.emit(item);
        //     this.itemsByKey.get(item.key).push(item);
        //   }
        // });
        return results;
      }
      throwError('the result is not an SNItem or an Error');
    }));
  }

  /******************** HELPERS *********************/
  /**
   *
   * @param rest the rest call
   * @param queryvalues URI query params
   * @param body The call body
   * @param method The method used : get,post,put,delete
   * @param resultkey The keys used to return values as array
   */

  call(rest: string, queryvalues: [string, string][] = [], body: string = '',
       method: string = 'get', resultkey: string = ''): Observable<any> {
        
    return new Observable(observer => {
      let urltocall = this.callurl + rest;
      if (queryvalues.length !== 0) {
        const urlparams = [];
        queryvalues.forEach(valuepair => {
          urlparams.push(valuepair.join('='));
        });
        urltocall += '?' + encodeURI(urlparams.join('&'));
      }
      let headers = new HttpHeaders();
      if (this.debugMode) {
        headers = headers.append('ODB-Debug', 'true');
      }
      switch (method) {
        case 'post':
          {
            headers = headers.append('Content-Type', 'application/json');
            this.http.post(urltocall, body, {headers}).subscribe(results => {
              observer.next(results);
            }, error => {
              observer.error(error);
            });
          }
          break;
        case 'put':
          {
            headers = headers.append('Content-Type', 'application/json');
            this.http.put(urltocall, body, {headers}).subscribe(results => {
              observer.next(results);
            }, error => {
              observer.error(error);
            });
          }
          break;
        case 'get':
          {
            try {
     console.log('Calling http get');
              this.http.get(urltocall).subscribe(results => {
//                console.log('http get called');
                try {
                  if (resultkey.length !== 0) {
                    if (typeof results[resultkey] === 'undefined') {
                      // No result key found
                      console.log('No result key found ', results);
                      observer.error('No result key found');
                    } else {
                      results = results[resultkey];
                      if (results === false) {
                        observer.next([]);
                      } else {
                        if (results instanceof Array) {
  //                        console.log('Build items from json');
                          const buildItems = this.factory.itemsFromJson(results);
                          buildItems.forEach(buildItem => {
                            this.itemsById.set(buildItem.ID, buildItem);
                            this.itemStored.emit(buildItem);
                          });
                          observer.next(buildItems);
                        } else {
  //                        console.log('Build item from json');
                          const buildItem = this.factory.itemFromJson(results);
                          this.itemsById.set(buildItem.ID, buildItem);
                          this.itemStored.emit(buildItem);
                          observer.next(buildItem);
                        }
                      }
                    }
                  } else {
                    observer.next(results);
                  }
                } catch (exception) {
                  // Just return json
                  console.log('Exception ' + exception.message + ' during call to ', urltocall);
                  observer.error('Exception during call to');
                }
              }, error => {
                observer.error(error);
              });
            } catch {
              console.log('Error while http get');
              observer.error('Error while http get');
            }
          }
          break;
        case 'delete':
          {
            this.http.delete(urltocall).subscribe(results => {
              observer.next(results);
            }, error => {
              observer.error(error);
            });
          }
          break;
        default:
          observer.error('Wrong method' + method);
      }
    });
  }
}
