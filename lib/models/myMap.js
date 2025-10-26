class MyMap {
    map = new Map();
    key = '';
    constructor(list = [], key = 'id') {
        this.map = new Map(list.map((item) => [item[key], item]));
        this.key = key;
    }
    get size() {
        return this.map.size;
    }
    get array() {
        const arr = [];
        for (const iterator of this.map.values()) {
            arr.push(iterator);
        }
        return arr;
    }
    get first() {
        return [...this.map][0]?.[1];
    }
    set(key, value) {
        this.map.set(key, value);
    }
    get(key) {
        return this.map.get(key);
    }
    values() {
        return this.map.values();
    }
    concat(map) {
        for (const iterator of map.values()) {
            this.map.set(iterator[this.key], iterator);
        }
        return this;
    }
    delete(key) {
        this.map.delete(key);
        return this;
    }
    根据某个属性值统计(field, value) {
        let count = 0;
        for (const iterator of this.map.values()) {
            const v = iterator[field];
            if (v && v === value) {
                count++;
            }
        }
        return count;
    }
}

export { MyMap as default };
