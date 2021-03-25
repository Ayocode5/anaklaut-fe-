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

            //Kalau Cart masih kosong tambah dlu
            if (state.carts.orders.length < 1) {

                state.carts.orders.push(data.orders[0])

                //buat catatan order
                state.carts.orderFromHistory.push(data.orders[0].order_from)
                state.carts.orderProductHistory.push(data.orders[0].order_data[0].product_id)

            } else {

                //Kalau barang masuk dengan admin_id X sudah di orderFromHistori maka tambah order_data nya
                if (state.carts.orderFromHistory.includes(data.orders[0].order_from)) {


                    //kalau barang yg dipesan (product_id) sudah ada di order_data maka tambahkan quantity nya
                    if (state.carts.orderProductHistory.includes(data.orders[0].order_data[0].product_id)) {
                        
                        state.carts.orders.forEach(order => {
                            order.order_data.forEach(dataOrder => {
                                if(dataOrder.product_id == data.orders[0].order_data[0].product_id) {

                                    dataOrder.quantity += data.orders[0].order_data[0].quantity
                                }
                            })
                        })

                    //kalau barang yg dipesan (product_id) belum ada maka tambah order_data
                    } else {

                        state.carts.orders.forEach(order => {
                            if(order.order_from == data.orders[0].order_from) {
                                order.order_data.push(data.orders[0].order_data[0])
                            }
                        })

                        //tambah histori produk id
                        state.carts.orderProductHistory.push(data.orders[0].order_data[0].product_id)
                        
                    }

                } else {
                    
                    state.carts.orders.push(data.orders[0])
                    
                    state.carts.orderFromHistory.push(data.orders[0].order_from)
                    state.carts.orderProductHistory.push(data.orders[0].order_data[0].product_id)
                }

            }
        },

        DEL_PRODUCT(state, index) { //parameter ke dua adalah index dari array orders
            console.log("Delete Orders "+index)
            state.carts.orders.splice(index, 1)
            console.log(state.carts.orders)
        }
    },

    actions: {
        addProductToCart({ commit }, data) {
            commit('ADD_PRODUCT', data)
        },

        delProductFromCart({ commit }, index) {
            commit('DEL_PRODUCT', index)
        }
    },

}