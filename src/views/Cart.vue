<template>
  <div v-if="state.content_loaded" class="checkout h-auto md:h-screen">
    <div class="">
      <div class="container mx-auto px-4">
        <div class="flex -mx-4 flex-wrap">
          <!-- START: shipping cart -->
          <div class="w-full px-4 mb-4 md:w-8/12 md:mb-0" id="shopping-cart">
            <div
              class="flex flex-start mt-8 pb-3 border-b border-gray-200 md:border-b-0"
            >
              <h3 class="text-2xl">Keranjang Belanja</h3>
            </div>
            <div
              class="flex flex-start mb-4 pb-3 border-b border-gray-200 md:border-b-0"
            >
              <h3 class="text-sm">
                *Pembayaran hanya bisa diproses untuk setiap 1 penjual
              </h3>
            </div>

            <!-- START: Table Title -->
            <div class="border-b border-gray-200 mb-4 hidden md:block">
              <div class="flex flex-start items-center pb-4 -mx-4">
                <div class="px-4 flex-none">
                  <div class="" style="width: 90px">
                    <h6>Foto</h6>
                  </div>
                </div>
                <div class="px-4 md:w-5/12">
                  <div class="">
                    <h6>Produk</h6>
                  </div>
                </div>
                <div class="px-4 md:w-7/12">
                  <div class="">
                    <h6>Harga</h6>
                  </div>
                </div>
                <div class="px-4 md:w-5/12">
                  <div class="">
                    <h6>Jumlah</h6>
                  </div>
                </div>
                <div class="px-4 md:w-2/12">
                  <div class="text-center">
                    <h6>Aksi</h6>
                  </div>
                </div>
              </div>
            </div>
            <!-- END: Table Title -->

            <!-- START: Cart empty wrapper -->
            <span id="cart-empty" class="hidden text-center py-8">
              Ooops... Keranjang kamu kosong
              <form method="" action="/Details">
                <button
                  type="submit"
                  class="btn btn-primary px-10 mx-3 md:mx-0"
                >
                  Belanja
                </button>
              </form>
            </span>

            <!-- END: Cart empty wrapper -->

            <div
              v-for="(admin, order_index) in carts.orders"
              :key="order_index"
              class="p-2 bg-gray-50 rounded-lg my-2"
            >
              <h5 class="font-semibold text-lg md:text-xl leading-8 my-2">
                {{ admin.order_from_name }}
              </h5>
              <hr class="border-b-2 border-gray-100" />
              <!-- START: Table Item 1 -->
              <div
                v-for="(order, product_index) in admin.order_data"
                :key="product_index"
                class="flex flex-start flex-wrap items-center my-4 -mx-4"
                data-row="1"
              >
                <div class="px-4 flex-none">
                  <div class="" style="width: 90px; height: 90px">
                    <img
                      :src="order.product_image"
                      class="object-cover rounded-xl w-full h-full"
                    />
                  </div>
                </div>
                <div class="px-4 w-auto md:w-5/12 flex-1">
                  <div class="">
                    <h5 class="font-semibold text-lg md:text-xl leading-8">
                      {{ order.product_name }}
                    </h5>
                    <h6
                      class="font-semibold text-base md:text-lg block md:hidden"
                    >
                      {{ order.product_price }}
                    </h6>
                  </div>
                </div>
                <div
                  class="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block"
                >
                  <div class="">
                    <h6 class="font-semibold text-lg">
                      Rp. {{ order.product_price }}
                    </h6>
                  </div>
                </div>
                <div
                  class="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block"
                >
                  <div class="">
                    <h6
                      class="flex justify-center items-center font-semibold text-lg"
                    >
                      {{ order.quantity }}
                    </h6>
                  </div>
                </div>
                <div class="px-4 w-2/12">
                  <div class="text-center">
                    <button
                      @click="delProductFromCart(order_index, product_index)"
                      data-delete-item="1"
                      class="text-red-600 border-none focus:outline-none px-3 py-1"
                    >
                      <h1>X</h1>
                    </button>
                  </div>
                </div>
              </div>
              <!-- END: Table Item 1 -->

              <hr class="border-b-2 border-gray-100" />
              <div class="text-right mx-6 my-3">
                <button
                  @click.prevent="
                    midtrans_pay(carts.orders[order_index], order_index)
                  "
                  type="submit"
                  class="btn btn-primary text-sm transition-all duration-200 px-3"
                  style="height: 10px"
                >
                  Bayar
                </button>
              </div>
            </div>
          </div>
          <!-- END: shipping cart -->

          <!-- START: shipping details -->
          <div class="w-full md:px-4 md:w-4/12" id="shipping-detail">
            <div class="bg-gray-50 px-4 py-6 md:p-6 md:my-4 md:rounded-md">
              <form action="success.html">
                <div class="flex flex-start mb-6">
                  <h3 class="text-2xl">Detail Pesanan</h3>
                </div>

                <!-- START: Input Complete Name -->
                <div class="flex flex-col mb-4">
                  <label for="complete-name" class="text-sm mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    data-input
                    type="text"
                    id="complete-name"
                    class="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Masukan Nama Lengkap Anda"
                  />
                </div>
                <!-- END: Input Complete Name -->

                <!-- START: Input address -->
                <div class="flex flex-col mb-4">
                  <label for="address" class="text-sm mb-2">
                    Alamat Lengkap
                  </label>
                  <input
                    data-input
                    type="text"
                    id="address"
                    class="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Masukkan Alamat Lengkap Anda"
                  />
                </div>
                <!-- END: Input Address -->

                <!-- START: Input Phone Number -->
                <div class="flex flex-col mb-4">
                  <label for="phone-number" class="text-sm mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    data-input
                    type="tel"
                    id="phone-number"
                    class="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Masukkan Nomor Telepon Anda"
                  />
                </div>
                <!-- END: Input Phone Number -->

                <!-- START: Input Choose Courier -->
                <div class="flex flex-col mb-4">
                  <label class="text-sm mb-2"> Pilih Kurir </label>
                  <div class="flex -mx-2 flex-wrap">
                    <!-- START: courier 1 -->
                    <div class="px-2 w-6/12 h-24 mb-4">
                      <button
                        data-value="jne"
                        data-name="courier"
                        type="button"
                        class="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                      >
                        <img
                          src="jne"
                          alt="logo jne"
                          class="object-contain max-h-full"
                        />
                      </button>
                    </div>
                    <!-- END: courier 1 -->

                    <!-- START: courier 2 -->
                    <div class="px-2 w-6/12 h-24 mb-4">
                      <button
                        data-value="j&t"
                        data-name="courier"
                        type="button"
                        class="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                      >
                        <img
                          src="jnt"
                          alt="logo j&t"
                          class="object-contain max-h-full"
                        />
                      </button>
                    </div>
                    <!-- END: courier 2 -->
                  </div>
                </div>
                <!-- END: Input Choose Courier -->

                <!-- START: Input Choose payment -->
                <div class="flex flex-col mb-4">
                  <label class="text-sm mb-2"> Pilih Pembayaran </label>
                  <div class="flex -mx-2 flex-wrap">
                    <!-- START: payment 1 -->
                    <div class="px-2 w-6/12 h-24 mb-4">
                      <button
                        data-value="bca"
                        data-name="payment"
                        type="button"
                        class="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                      >
                        <img
                          src="bankBca"
                          alt="logo bca"
                          class="object-contain max-h-full"
                        />
                      </button>
                    </div>
                    <!-- END: payment 1 -->

                    <!-- START: payment 2 -->
                    <div class="px-2 w-6/12 h-24 mb-4">
                      <button
                        data-value="bri"
                        data-name="payment"
                        type="button"
                        class="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                      >
                        <img
                          src="bankMandiri"
                          alt="logo bri"
                          class="object-contain max-h-full"
                        />
                      </button>
                    </div>
                    <!-- END: payment 2 -->
                  </div>
                </div>
                <!-- END: Input Choose payment -->
              </form>
            </div>
          </div>
          <!-- END: shipping details -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Cart",
  data: function () {
    return {
      carts: {
        orders: [],
        totalOrder: 0,
      },

      temp: null,

      snap: {
        //Informasi ini didapat dari midtrans, kemudian akan disimpan ke database
        result_data: null,
        result_type: null,
        order_data: null,
      },

      state: {
        content_loaded: false,
      },
    };
  },

  methods: {
    delProductFromCart(order_index, product_index, paid) {
      let params = { order_index, product_index, paid };
      this.$store.dispatch("cart/delProductFromCart", params);
    },

    changeResult(type, data, order) {
      this.snap.result_type = type;
      this.snap.result_data = data;
      this.snap.order_data = {
        orders: [order],
      };
    },

    async midtrans_pay(order, order_index) {
      if (!this.$store.getters["auth/authenticated"]) {
        alert("You are not logged in");
        this.$router.replace({ name: "SignIn" });
        return;
      }

      await axios
        .post("v1/transaction/token", {
          orders: [order],
        })
        .then((data) => {
          // console.log("SNAP TOKEN >> " + data.data.token);

          //eslint-disable-next-line no-undef
          snap.pay(data.data.token, {
            onSuccess: (res) => {
              // console.log(res);
              this.changeResult("success", res, order);

              axios.post("v1/transaction/finish", this.snap).then(() => {
                //IF SUCCESS REDIRECT TO SUCCESS PAGE
                this.$store.state.status_order = true;
                this.$router.replace({ name: "Success" });
              });
              //Setelah order sukses dibuat hapus item dari cart
              this.$store.commit("cart/DEL_ORDER", order_index);
            },

            onPending: (res) => {
              this.changeResult("pending", res, order);

              axios.post("v1/transaction/finish", this.snap).then(() => {
                //IF SUCCESS REDIRECT TO SUCCESS PAGE
                this.$store.state.status_order = true;
                this.$router.replace({ name: "Success" });
              });
              //Setelah order sukses dibuat hapus item dari cart
              this.$store.commit("cart/DEL_ORDER", order_index);
            },

            onError: function (res) {
              console.log(res);
              this.changeResult("error", res, order);
              // axios.post('v1/transaction/finish', this.snap)
            },
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  created() {
    this.carts.orders = this.$store.getters["cart/getCarts"];
    this.carts.totalOrder = this.$store.getters["cart/getTotalOrder"];
    this.state.content_loaded = true;
  },
};
</script>