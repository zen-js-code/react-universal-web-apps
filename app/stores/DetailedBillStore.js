import BaseStore from './BaseStore';
import Consts from '../actions/Consts';

let detailedBillData = {};

export default class DetailedBillStore extends BaseStore {
    resetAll() {
        detailedBillData = {};
    }

    setAll(data) {
        detailedBillData = data;  
    }

    getAll() {
        return detailedBillData;
    }

    handleAction(action) {
        switch (action.type) {
        case Consts.LOAD_DETAILED_BILL:
            this.setAll(action.data);
            this.emitChange();
            break;
        default:
        }
    }
}
