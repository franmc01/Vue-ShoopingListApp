const app = Vue.createApp({
    data() {
        return {
            header: 'Shopping List App',
            newItem: '',
            editing: false,
            newItemPriority: 'low',
            newItemHighPriority: false,
            iceCreamFlavors: [],
            arrayItems: [
                // { id: 1, label: '10 party hats' },
                // { id: 2, label: '2 board games' },
                // { id: 3, label: '20 cups' },
            ],
            objectItems: {
                'item-1': { id: 1, label: '10 party hats' },
                'item-2': { id: 2, label: '2 board games' },
                'item-3': { id: 3, label: '20 cups' },
            }
        }
    },
    methods: {
        saveItem() {
            this.arrayItems.push({ id: this.arrayItems.length + 1, label: this.newItem });
            this.newItem = "";
        },
        doEdit(editing) {
            this.editing = editing;
            this.newItem = '';
        }
    }

}).mount('#shopping-list');