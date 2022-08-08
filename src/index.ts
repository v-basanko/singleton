import {Storage} from "./storage/storage";

const run = ()=>{
    const storage1 = Storage.getInstance();
    const storage2 = Storage.getInstance();
    const storage3 = Storage.getInstance();

    storage1.set('key1', 'value1');
    storage2.set('key2', 'value2');
    storage3.set('key3', 'value3');

    console.log(storage1);
}

run();
