import { IStorage } from "../shared/interfaces/storage.interface";

export class Storage implements IStorage{
    static _storage: Storage;

    static getInstance() {
        if(!Storage._storage) {
            Storage._storage = new Storage();
        }
        return Storage._storage;
    }

    _data: Map<string, string>

    constructor() {
        this._data = new Map();
    }


    set(key:string, value:string):Promise<void> {
        this._data.set(key, value);
        return Promise.resolve();
    }

    get(key: string):Promise<string> {
        return Promise.resolve(this._data.get(key));
    }

    remove(key: string):Promise<void> {
        this._data.delete(key);
        return Promise.resolve();
    }

    clear():Promise<void> {
        this._data.clear();
        return Promise.resolve();
    }
}
