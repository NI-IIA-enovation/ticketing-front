import { RegisterItem } from '../decorators/snitem-factory-decorator';
import { SNItem } from './snitem';

@RegisterItem()
export class SNOffer extends SNItem {
    private $addres: string;
    private $editmode: string;
    private $country: string;
    private $addresse_number: string;
    private $address_publish: string;
    private $bought: string;
    private $building_faces: string;
    private $building_groundarea: string;
    private $building_levels: string;
    private $cache_epclabel: string;
    private $cache_regionlevel1: string;
    private $city: string;
    private $desc_simple: string;
    private $finance_price: string;
    private $house_bednumber: string;
    private $house_category: string;
    private $house_garages: string;
    private $house_sdbnumber: string;
    private $house_suphabi: string;
    private $house_supjardin: string;
    private $house_supsol: string;
    private $reference: string;
    private $status: string;
    private $sticker: string;
    private $title: string;
    private $type: string;
    private $visvir: string;
   
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
        this.$country=this.getProperty('country');
        return this.getProperty('country');
    }
    get addresse_number() {
        this.$addresse_number=this.getProperty('addresse_number');
        return this.getProperty('addresse_number');
    }
    get address_publish() {
        this.$address_publish=this.getProperty('address_publish');
        return this.getProperty('address_publish');
    }
    get bought() {
        this.$bought=this.getProperty('bought');
        return this.getProperty('bought');
    }
    get building_faces() {
        this.$building_faces=this.getProperty('building_faces');
        return this.getProperty('building_faces');
    }
    get building_groundarea() {
        this.$building_groundarea=this.getProperty('building_groundarea');
        return this.getProperty('building_groundarea');
    }
    get building_levels() {
        this.$building_levels=this.getProperty('building_levels');
        return this.getProperty('building_levels');
    }
    get cache_epclabel() {
        this.$cache_epclabel=this.getProperty('cache_epclabel');
        return this.getProperty('cache_epclabel');
    }
    get cache_regionlevel1() {
        this.$cache_regionlevel1=this.getProperty('cache_regionlevel1');
        return this.getProperty('cache_regionlevel1');
    }
    get city() {
        this.$city=this.getProperty('city');
        return this.getProperty('city');
    }
    get desc_simple() {
        this.$desc_simple=this.getProperty('desc_simple');
        return this.getProperty('desc_simple');
    }
    get finance_price() {
        this.$finance_price=this.getProperty('finance_price');
        return this.getProperty('finance_price');
    }
    get house_bednumber() {
        this.$house_bednumber=this.getProperty('house_bednumber');
        return this.getProperty('house_bednumber');
    }
    get house_category() {
        this.$house_category=this.getProperty('house_category');
        return this.getProperty('house_category');
    }
    get house_garages() {
        this.$house_garages=this.getProperty('house_garages');
        return this.getProperty('house_garages');
    }
    get house_sdbnumber() {
        this.$house_sdbnumber=this.getProperty('house_sdbnumber');
        return this.getProperty('house_sdbnumber');
    }
    get house_suphabi() {
        this.$house_suphabi=this.getProperty('house_suphabi');
        return this.getProperty('house_suphabi');
    }
    get house_supjardin() {
        this.$house_supjardin=this.getProperty('house_supjardin');
        return this.getProperty('house_supjardin');
    }
    get house_supsol() {
        this.$house_supsol=this.getProperty('house_supsol');
        return this.getProperty('house_supsol');
    }
    get reference() {
        this.$reference=this.getProperty('reference');
        return this.getProperty('reference');
    }
    get status() {
        this.$status=this.getProperty('status');
        return this.getProperty('status');
    }
    get sticker() {
        this.$sticker=this.getProperty('sticker');
        return this.getProperty('sticker');
    }
    public get title() {
        this.$title=this.getProperty('title');
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
