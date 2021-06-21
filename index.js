const app = Vue.createApp({
    data() {
        return {
            header: 'Shopping List App',
            newItem: '',
            editing: false,
            newItemPriority: 'low',
            newItemHighPriority: false,
            iceCreamFlavors: [],
            arrayItems: [],
            objectItems: {
                'item-1': { id: 1, label: '10 party hats', purchased: false },
                'item-2': { id: 2, label: '2 board games', purchased: true },
                'item-3': { id: 3, label: '20 cups', purchased: true },
            }
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


// Apuntes
/* Para agregar clases dinamicas en Vue existen dos formas - Object Sintax y Array Syntax,
cabe mencionar que no es obligatorio que se deba aprender ambas, en todo caso cualquiera de
dos cumple su cometido; en lo personal yo me quedo con la de Array Syntax */