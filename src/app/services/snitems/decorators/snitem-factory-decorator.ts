import { SNItem } from '../models/snitem';
import { SNITEM_REGISTERED_CLASSES } from '../models/snitemfactory';

export function RegisterItem() {
    return function _RegisterItem<T extends new(...args: any[]) => SNItem>(constr: T) {
        // Register item to factory
        const itemToRegister: SNItem = new constr();
        SNITEM_REGISTERED_CLASSES.set(itemToRegister.key, itemToRegister);
        console.log('Registering item', itemToRegister.key);
    };
}
