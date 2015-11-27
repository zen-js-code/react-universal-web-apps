import {EventEmitter} from 'events';

export default class BaseStore extends EventEmitter {
    static get CHANGE_EVENT() {
        return 'CHANGE_EVENT';
    }

    emitChange() {
        this.emit(this.constructor.CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(this.constructor.CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(this.constructor.CHANGE_EVENT, callback);
    }
}
