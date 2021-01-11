import { RegisterItem } from '../decorators/snitem-factory-decorator';
import { SNItem } from './snitem';

@RegisterItem()
export class SNUser extends SNItem {

    constructor(itemid: number = 0) {
        super(itemid);
        this.key = 'SNItem.SNUser';
    }

    get editmode() {
        return true;
    }

    get firstname() {
        return this.getProperty('firstname');
    }

    get lastname() {
        return this.getProperty('lastname');
    }

    get language() {
        const storedLanguage = this.getProperty('language');
        if (!storedLanguage) {
            // Defaults to fr
            return 'fr';
        }
        if (storedLanguage.indexOf('-') === -1) {
            // No - seperator ...
            return storedLanguage;
        }
        return storedLanguage.split('-')[0];
    }

    public clone(): any {
        return new SNUser();
    }
}
