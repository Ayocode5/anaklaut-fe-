export default {
    namespaced: true,

    state: {
        carts: {
            orders: [

                //PATTERN DATA

                // { 
                //     order_from: null,
                //     customer_id: null,
                //     order_data: [
                //         {
                //             product_id: null,
                //             quantity: null,
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
            return state.carts.totalOrder
        }
    },

    mutations: {

        ADD_PRODUCT(state, data) {

            //Hitung Total Order
            state.carts.totalOrder += data.orders[0].order_data[0].quantity

            if (state.carts.orders.length < 1) {

                state.carts.orders.push(data.orders[0])

                state.carts.orderFromHistory.push(data.orders[0].order_from)
                state.carts.orderProductHistory.push(data.orders[0].order_data[0].product_id)

            } else {

                //Kalau barang masuk dengan admin_id X sudah di orderFromHistori maka tambah order_data nya
                if (state.carts.orderFromHistory.includes(data.orders[0].order_from)) {

                    // console.log("pernah pesen di admin " + data.orders[0].order_from)

                    //kalau barang yg dipesan (product_id) sudah ada di order_data maka tambahkan quantiti nya
                    if (state.carts.orderProductHistory.includes(data.orders[0].order_data[0].product_id)) {

                        // console.log("produk id "+ data.orders[0].order_data[0].product_id + " ada maka ubah quantitinya")
                        
                        state.carts.orders.forEach(order => {
                            order.order_data.forEach(dataOrder => {
                                if(dataOrder.product_id == data.orders[0].order_data[0].product_id) {
                                    console.log("wkwkwkwkwk")
                                    dataOrder.quantity += data.orders[0].order_data[0].quantity
                                }
                            })
                        })

                    //kalau barang yg dipesan (product_id) belum ada maka tambah order_data
                    } else {

                        // console.log("produk id " + data.orders[0].order_data[0].product_id + " sudah ada maka produk ditambahkan")

                        state.carts.orders.forEach(order => {
                            if(order.order_from == data.orders[0].order_from) {
                                order.order_data.push(data.orders[0].order_data[0])
                            }
                        })

                        //tambah histori produk id
                        state.carts.orderProductHistory.push(data.orders[0].order_data[0].product_id)
                        
                    }

                } else {
                    // console.log("belum pernah pesen di admin " + data.orders[0].order_from)
                    
                    state.carts.orders.push(data.orders[0])
                    
                    state.carts.orderFromHistory.push(data.orders[0].order_from)
                    state.carts.orderProductHistory.push(data.orders[0].order_data[0].product_id)
                }

            }
        },

        DEL_PRODUCT(state, id) {
            state.carts.orders.forEach(order => {

                order.order_data.forEach((product, index) => {
                    //jika id produk cocok maka hapus produk ( product_id dan quantity ) dari produk data dari array order_data
                    if (product.product_id == id) {
                        order.order_data.splice(index, 1)
                    }
                })

            });
        }
    },

    actions: {
        addProductToCart({ commit }, data) {
            commit('ADD_PRODUCT', data)
        },

        delProductFromCart({ commit }, id) {
            commit('DEL_PRODUCT', id)
        }
    },

}