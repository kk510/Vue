const app = new Vue({
    el: "#app",
    data: {
        books: [{
                id: 1,
                name: '<算法导论>',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '<编程艺术>',
                date: '2006-9',
                price: 15.00,
                count: 1
            },
            {
                id: 3,
                name: '<变成主机>',
                date: '2006-9',
                price: 323.00,
                count: 1
            },
            {
                id: 4,
                name: '<代码大全>',
                date: '2006-9',
                price: 12.00,
                count: 1
            }

        ],
    },
    computed: {
        totalPrice() {
            // let totalPrice = 0
            // for (let i = 0; i < this.books.length; i++) {
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }
            // return totalPrice

            // let totalPrice = 0
            // for (let i in this.books) {

            //     totalPrice += this.books[i].price * this.books[i].count;
            // }
            // return totalPrice;

            // let totalPrice = 0;
            // for (let item of this.books) {
            //     // console.log(item)
            //     totalPrice += item.price * item.count
            // }
            // return totalPrice

            //reduce
            return this.books.reduce(function(val, book) {
                return val + book.price * book.count
            }, 0);

        }
    },
    methods: {
        getFinnalPrice(price) {
            return '￥' + price.toFixed(2);
        },
        add(index) {

            // console.log('+', index)
            this.books[index].count++;
        },
        sub(index) {
            this.books[index].count--;
        },
        removeHandler(index) {
            this.books.splice(index, 1)
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2);

        }
    }
})