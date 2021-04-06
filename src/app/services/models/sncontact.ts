import { RegisterItem } from 'projects/snitem/src/lib/apisnitem/decorators/snitem-factory-decorator';
import { SNItem } from 'projects/snitem/src/lib/apisnitem/models/snitem';
@RegisterItem()
export class SNContact extends SNItem {

    constructor(itemid: number = 0) {
        super(itemid)
        this.key = 'SNItem.SNContact';
    }

    get editmode() {
        return true;
    }
    public clone(): any {
        return new SNContact();
    }
}
