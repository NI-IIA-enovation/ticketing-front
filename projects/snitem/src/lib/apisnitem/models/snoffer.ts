import { RegisterItem } from '../decorators/snitem-factory-decorator';
import { SNItem } from './snitem';

@RegisterItem()
export class SNOffer extends SNItem {
    
    constructor(itemid: number = 0) {
        super(itemid);
        this.key = 'SNItem.SNOffer';
    }

    get editmode() {
        return true;
    }

    get address() {
        return this.getProperty('address');
    }
   

    get country() {
        return this.getProperty('country');
    }
    get addresse_number() {
        return this.getProperty('addresse_number');
    }
    get address_publish() {
        return this.getProperty('address_publish');
    }
    get bought() {
        return this.getProperty('bought');
    }
    get building_faces() {
        return this.getProperty('building_faces');
    }
    get building_groundarea() {
        return this.getProperty('building_groundarea');
    }
    get building_levels() {
        return this.getProperty('building_levels');
    }
    get cache_epclabel() {
        return this.getProperty('cache_epclabel');
    }
    get cache_regionlevel1() {
        return this.getProperty('cache_regionlevel1');
    }
    get city() {
        return this.getProperty('city');
    }
    get desc_simple() {
        return this.getProperty('desc_simple');
    }
    get finance_price() {
        return this.getProperty('finance_price');
    }
    get house_bednumber() {
        return this.getProperty('house_bednumber');
    }
    get house_category() {
        return this.getProperty('house_category');
    }
    get house_garages() {
        return this.getProperty('house_garages');
    }
    get house_sdbnumber() {
        return this.getProperty('house_sdbnumber');
    }
    get house_suphabi() {
        return this.getProperty('house_suphabi');
    }
    get house_supjardin() {
        return this.getProperty('house_supjardin');
    }
    get house_supsol() {
        return this.getProperty('house_supsol');
    }
    get reference() {
        return this.getProperty('reference');
    }
    get status() {
        return this.getProperty('status');
    }
    get sticker() {
        return this.getProperty('sticker');
    }
    public get title() {
        return this.getProperty('title');
    }
    
    
    get type() {
        return this.getProperty('Vente');
    }
    get visvir() {
        return this.getProperty('visvir');
    }
    public clone(): any {
        return new SNOffer();
    }
}
