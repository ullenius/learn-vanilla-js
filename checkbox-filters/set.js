export const SimpleSet = {
    init : function init() {
        this.set = [];
    },
    add : function add(element) {
        this.set[element] = true;
    },
    toArray : function toArray() {
        return Object.keys(this.set);
    }
};
