import { Injectable } from '@angular/core';
import { SNItem } from './snitem';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export const SNITEM_REGISTERED_CLASSES = new Map();

@Injectable({
  providedIn: 'root'
})

export class SNItemFactory {

  private static instance: SNItemFactory = null;

//  private itemClasses = [];

  constructor() {
    SNItemFactory.instance = this;
  }

  public static getInstance(): SNItemFactory {
    return SNItemFactory.instance;
  }

  addItem(key: string, item) {
    SNITEM_REGISTERED_CLASSES.set(key, item);
//    this.itemClasses[key] = item;
  }

  itemSubClasses() {
    return [];
  }

  itemByKey(itemkey: string) {
    if (SNITEM_REGISTERED_CLASSES.has(itemkey)) {
      return SNITEM_REGISTERED_CLASSES.get(itemkey).clone();
    }
    return null;
  }

  itemFromJson(json) {
    
    if (!json) {
      return null;
    }
    if (typeof(json) === 'string') {
      // clean up and decode
      json = json.replace(/\\\\/g, '\\');
      try {
        json = JSON.parse(json);
      } catch (exception) {
        console.log('Unable to parse json', exception, json);
        return null;
      }
    }
  
    if (typeof json.Key === 'undefined') {
      if (typeof json.key === 'undefined') {
        
        console.log('Key or key is undefined', json);
        return null;
      } else {
        
        // item serialized by snitem.ts
        let itemkey = json.key;
        let itemts = null;
        if (!SNITEM_REGISTERED_CLASSES.has(itemkey)) {
          console.log('item class ' + itemkey + ' not found');
          // instantiate base class
          itemkey = 'SNItem';
        }
        
        itemts = SNITEM_REGISTERED_CLASSES.get(itemkey).clone();

        itemts.fromJson(json);
        console.log(json);
        return itemts;
      }
    }
    let itemKey = json.Key;
    let item = null;
    if (!SNITEM_REGISTERED_CLASSES.has(itemKey)) {
      // instantiate base class
      itemKey = 'SNItem';
    }
    
    item = SNITEM_REGISTERED_CLASSES.get(itemKey).clone();
    item.fromJson(json);
    return item;
  }

  itemsFromJson(json) {
  //console.log('factory items from json');
 
    if (typeof(json) === 'string') {
      // clean up and decode
      
      json = json.replace(/\\\\/g, '\\');
      try {
        json = JSON.parse(json);
      } catch (exception) {
        console.log('Unable to parse json', exception, json);
        return null;
      }
    }
    if (json instanceof Array) {
     
      const items = [];
      json.forEach(ajson => {
        ajson.key="SNItem.SNOffer";
        const item = this.itemFromJson(ajson);
        
        if (item) {
          items.push(item);
        }
      });
      console.log(items);
      return items;
    }
//    console.log('Json is not an Array', json);
    return null;
  }
}
