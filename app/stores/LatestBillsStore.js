import BaseStore from './BaseStore';
import Consts from '../actions/Consts';

let latestBillsData = {};

export default class LatestBillStore extends BaseStore {
    resetAll() {
        latestBillsData = {};
    }

    setAll(data) {
        latestBillsData = data;  
    }

    getAll() {
        return latestBillsData;
    }

    handleAction(action) {
        switch (action.type) {
        case Consts.LOAD_LATEST_BILLS:
            this.setAll(action.data);
            this.emitChange();
            break;
        default:
        }
    }
}
