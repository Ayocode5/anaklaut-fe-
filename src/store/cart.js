export default {
    namespaced: true,

    state: {
        carts: {
            orders: [

                //PATTERN DATA

                // { 
                //     order_from: null,
                //     order_from_name: null,
                //     customer_id: null,
                //     order_data: [
                //         {
                //             product_id: null,
                //             quantity: null,
                //             product_name: null,
                //             product_image: null,
                //             product_price: null
                //         },
                //     ],
                // },

            ],

            totalOrder: 0,
            orderFromHistory: [], // Kita habis belanjan dengan siapa aja ( Integer )
            orderProductHistory: []
        },


    },

    getters: {
        getCarts(state) {
            return state.carts.orders
        },

        getTotalOrder(state) {

            state.carts.totalOrder = 0
            state.carts.orders.forEach(order => {

                order.order_data.forEach(val => {
                    state.carts.totalOrder += val.quantity
                })
            })

            return state.carts.totalOrder;

        }
    },

    mutations: {

        ADD_PRODUCT(state, data) {

            let orders = data.orders[0];
            let orderFrom = data.orders[0].order_from;
            let product_id = data.orders[0].order_data[0].product_id;
            let order_quantity = data.orders[0].order_data[0].quantity;
            let order_data = data.orders[0].order_data[0];

            //Kalau Cart masih kosong tambah dlu
            if (state.carts.orders.length < 1) {

                state.carts.orders.push(orders)

                if (!state.carts.orderFromHistory.includes(orderFrom)) {
                    state.carts.orderFromHistory.push(orderFrom) //buat histori order
                }

                if (!state.carts.orderProductHistory.includes(product_id)) {
                    state.carts.orderProductHistory.push(product_id)  //buat histori produk
                }

            } else {

                //Kalau barang masuk dengan admin_id X sudah di orderFromHistori maka tambah order_data nya
                if (state.carts.orderFromHistory.includes(orderFrom)) {

                    //kalau barang yg dipesan (product_id) sudah ada di order_data maka tambahkan quantity nya
                    if (state.carts.orderProductHistory.includes(product_id)) {

                        state.carts.orders.forEach(order => {
                            order.order_data.forEach(dataOrder => {
                                if (dataOrder.product_id == product_id) {
                                    dataOrder.quantity += order_quantity
                                }
                            })
                        })

                        //kalau barang yg dipesan (product_id) belum ada maka tambah order_data
                    } else {

                        state.carts.orders.forEach(order => {
                            if (order.order_from == orderFrom) {
                                order.order_data.push(order_data)
                            }
                        })

                        //tambah histori produk id
                        state.carts.orderProductHistory.push(product_id)

                    }

                } else {
                    state.carts.orders.push(orders)
                    state.carts.orderFromHistory.push(orderFrom)
                    state.carts.orderProductHistory.push(product_id)
                }
            }

            //SAVE CART TO LOCALSTORAGE
            const carts = JSON.stringify(state.carts)
            localStorage.setItem('carts', carts)
        },

        DEL_PRODUCT(state, params) { //parameter ke dua adalah index dari array orders

            let index = params.order_index;
            let product_index = params.product_index;

            //Masuk ke index orders
            if (state.carts.orders[index].order_data.length > 0) {
                //cek order_data, jika ada data maka hapus dengan id produk id nya
                state.carts.orders[index].order_data.splice(product_index, 1)

                //Hapus History 
                state.carts.orderProductHistory.splice(product_index, 1)

                //Jika order_data sudah kosong sekalian hapus data ordernya
                if (state.carts.orders[index].order_data.length == 0) {
                    state.carts.orders.splice(index, 1)
                    //Hapus order histori
                    state.carts.orderFromHistory.splice(index, 1)
                }
            }

            //SAVE CART TO LOCALSTORAGE
            const carts = JSON.stringify(state.carts)
            localStorage.setItem('carts', carts)
        },

        DEL_ORDER(state, index) {
            state.carts.orders.splice(index, 1)
            //Hapus order histori
            state.carts.orderFromHistory.splice(index, 1)

            const carts = JSON.stringify(state.carts)
            localStorage.setItem('carts', carts)
        },

        LOAD_CART(state, carts) {
            state.carts = carts
        }
    },

    actions: {
        addProductToCart({ commit }, data) {
            commit('ADD_PRODUCT', data)
        },

        delProductFromCart({ commit }, params) {
            commit('DEL_PRODUCT', params)
        },

        loadCart({ commit }, carts) {
            commit('LOAD_CART', carts)
        },

        saveCart({ state }) {
            const carts = JSON.stringify(state.carts)
            localStorage.setItem('carts', carts)
        }
    },

}