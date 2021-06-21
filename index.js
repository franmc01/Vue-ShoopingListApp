const app = Vue.createApp({
    data() {
        return {
            header: 'Shopping List App',
            newItem: '',
            editing: false,
            newItemHighPriority: false,
            arrayItems: [],
        }
    },
    methods: {
        saveItem() {
            this.arrayItems.push({
                id: this.arrayItems.length + 1,
                label: this.newItem,
                highPriority: this.newItemHighPriority
            });
            this.newItem = "";
            this.newItemHighPriority = false;
        },
        doEdit(editing) {
            this.editing = editing;
            this.newItem = '';
            this.newItemHighPriority = false;
        },
        togglePurchased(item) {
            item.purchased = !item.purchased;
        }
    },
    computed: {
        characterCount() {
            return this.newItem.length;
        },
        reversedItems() {
            return [...this.arrayItems].reverse();
        }
    },

}).mount('#shopping-list');
