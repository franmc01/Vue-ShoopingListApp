const app = Vue.createApp({
    data() {
        return {
            header: 'Shopping List App',
            arrayItems: [
                { id: 1, label: '10 party hats' },
                { id: 2, label: '2 board games' },
                { id: 3, label: '20 cups' },
            ],
            objectItems: {
                'item-1': { id: 1, label: '10 party hats' },
                'item-2': { id: 2, label: '2 board games' },
                'item-3': { id: 3, label: '20 cups' },
            }
        }
    },

}).mount('#shopping-list');