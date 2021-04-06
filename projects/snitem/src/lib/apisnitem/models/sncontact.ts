import { RegisterItem } from 'projects/snitem/src/lib/apisnitem/decorators/snitem-factory-decorator';
import { SNItem } from 'projects/snitem/src/lib/apisnitem/models/snitem';
@RegisterItem()
export class SNContact extends SNItem {
    name: string;
    email: string;
    gsm: string;
    notif: number;
    visit: number;
    surface: number;
    room: number;
    bathroom: number;
    status: string;
    type: string;
    constructor(itemid: number = 0) {
        super(itemid)
        this.key = 'SNItem.SNContact';
    }

    public clone(): any {
        return new SNContact();
    }
}
