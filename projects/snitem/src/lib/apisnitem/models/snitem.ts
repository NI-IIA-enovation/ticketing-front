import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Output, EventEmitter } from '@angular/core';
import { RegisterItem } from '../decorators/snitem-factory-decorator';

@RegisterItem()
export class SNItem {
    public ID = 0;
    public version = 0;
    public key = 'SNItem';
    public value = '';
    public properties: any = {};
    private itemchildsbykey: Map<string, SNItem[]> = new Map();
    private itemchilds: SNItem[] = [];
    private itemparentsbykey: Map<string, SNItem[]> = new Map();
    private itemparents: SNItem[] = [];
    @Output() created: EventEmitter<SNItem> = new EventEmitter();
    @Output() updated: EventEmitter<SNItem> = new EventEmitter();
    @Output() loaded: EventEmitter<SNItem> = new EventEmitter();
    @Output() childAdded: EventEmitter<SNItem> = new EventEmitter();
    @Output() parentAdded: EventEmitter<SNItem> = new EventEmitter();

    constructor(itemid: number = 0,) {
        this.setId(itemid);
    }

    public setId(itemid: number = 0): void {
        // TODO: Really build this item
        this.ID = itemid;
        if (this.ID !== 0) {
            // Call odb service to get this item JSON
        }
    }

    public setValue(value: string): void {
        this.value = value;
    }

    public setProperty(key: string, value: string): void {
        this.properties[key] = value;
    }

    public getProperty(key: string): string {
        if (typeof this.properties[key] !== 'undefined') {
            return this.properties[key];
        }
        return null;
    }

    public childs(childskey: string): Observable<SNItem[]> {
        return new Observable(observer => {
            if (this.itemchildsbykey.has(childskey)) {
                observer.next(this.itemchildsbykey.get(childskey));
            } else {
            }
        });
    }
    /**
     * Special method to get childs from cache
     * @param childskey the child key to search for
     */
    public childs$(childskey?: string): SNItem[] {
        if (!!childskey) {
            if (this.itemchildsbykey.has(childskey)) {
                return this.itemchildsbykey.get(childskey);
            }
            return [];
        }
        return this.itemchilds;
    }
    /**
     * Cpecial method to get the first child in cache
     * @param childkey the child key
     */
    public child$(childkey: string): SNItem {
        if (!this.itemchildsbykey.has(childkey)) {
            return null;
        }
        return this.itemchildsbykey.get(childkey)[0];
    }
    /**
     * Special method to check item in cache
     * @param childskey the key to check
     */

     public hasChilds$(childskey: string): boolean {
         return this.itemchildsbykey.has(childskey);
     }

    public addChild(child: SNItem, now = true): Observable<SNItem> {
        if (now) {
            return new Observable(observer => {
            });
        }
        this.updateChildsCache(child);
        child.updateParentsCache(this);
        return new Observable(observer => {
            observer.next(child);
        });
    }

    public parents(parentskey: string): Observable<SNItem[]> {
        if (this.itemparentsbykey.has(parentskey)) {
            return new Observable(observer => {
                observer.next(this.itemparentsbykey.get(parentskey));
            });
        }
        return ;
    }
    /**
     * Special method to get parents from cache
     * @param parentskey the parent key to search for
     */
    public parents$(parentskey: string): SNItem[] {
        if (this.itemparentsbykey.has(parentskey)) {
            return this.itemparentsbykey.get(parentskey);
        }
        return [];
    }

    public addParent(parent: SNItem, now = true): Observable<SNItem> {
        if (now) {
        }
        this.updateParentsCache(parent);
        parent.updateChildsCache(this);
        return new Observable(observer => {
            observer.next(parent);
        });
    }

    public create(): Observable<SNItem> {
        return ;
    }

    public removeChild(child: SNItem, link?: boolean): Observable<SNItem> {
        return ;
    }

    private updateChildsCache(child: SNItem): void {
        if (this.itemchildsbykey.has(child.key)) {
            // Append
            const keyArray = this.itemchildsbykey.get(child.key);
            if (keyArray.indexOf(child) === -1) {
                keyArray.push(child);
            }
        } else {
            this.itemchildsbykey.set(child.key, [child]);
        }
        if (this.itemchilds.indexOf(child) === -1) {
            this.itemchilds.push(child);
        }
    }

    private updateParentsCache(parent: SNItem): void{
        if (this.itemparentsbykey.has(parent.key)) {
            // Append
            const keyArray = this.itemparentsbykey.get(parent.key);
            if (keyArray.indexOf(parent) === -1) {
                keyArray.push(parent);
            }
            this.itemparentsbykey.get(parent.key).push(parent);
        } else {
            this.itemparentsbykey.set(parent.key, [parent]);
        }
        if (this.itemparents.indexOf(parent) === -1) {
            this.itemparents.push(parent);
        }
    }

    public update(): Observable<SNItem> {
        return ;
    }

    public clone(): any {
        return new SNItem();
    }

    public copy(withid = false, deep = false): void {
        const itemcopy = this.clone();
        itemcopy.id = withid ? this.ID : 0;
        itemcopy.key = this.key;
        itemcopy.value = this.value;
        itemcopy.version = withid ? this.version : 0;
        itemcopy.properties = Object.assign([], this.properties);
        if (deep) {
            this.itemchilds.forEach(child => {
                itemcopy.addChild(child.copy(withid, deep), false);
            });
        }
        return itemcopy;
    }

    public fromJson(json, emitLoaded = true): void {
        if (typeof json.Key === 'undefined') {
            if (typeof json.key === 'undefined') {
                return;
            } else {
                // item from snitem.ts
                if (this.key !== 'SNItem' && this.key !== json.key) {
                    // Only for snitem subclasses
                    console.log('Wrong key');
                } else {
                    this.ID = parseInt(json.ID, 10);
                    this.key = json.key;
                    this.value = json.value;
                    this.version = parseInt(json.version, 10);
                    this.properties = json.properties;
                    if (emitLoaded) {
                        this.loaded.emit(this);
                    }
                }
            }
        } else {
            if (this.key !== 'SNItem' && this.key !== json.Key) {
                // Only for snitem subclasses
                console.log('Wrong key');
            } else {
                this.ID = parseInt(json.ID, 10);
                this.key = json.Key;
                this.value = json.Value;
                this.version = parseInt(json.Version, 10);
                this.properties = json.properties;
                if (emitLoaded) {
                    this.loaded.emit(this);
                }
            }
        }
    }

    public toObj(deep = false): object {
        const itemObj = {
            id: this.ID,
            version: this.version,
            key: this.key,
            value: this.value,
            properties: this.properties,
        };
        return itemObj;
    }

    public toJson(): any {
        return JSON.stringify(this.toObj());
    }
}
