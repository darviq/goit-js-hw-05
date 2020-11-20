'use strict';

class Storage {
    constructor(items) {
        this.items = items.slice();
    }

    getItems() {
        return this.items;
    }
    
    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const delIndex = this.items.indexOf(item);
        if (delIndex !== -1) this.items.splice(delIndex, 1);
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]