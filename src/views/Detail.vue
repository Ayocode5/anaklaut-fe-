<template class="container mx-auto">
  <div v-if="state.contents_loaded">
    <div class="flex flex-wrap my-4 md:my-12">
      <div class="w-auto md:hidden px-4">
        <h2 class="text-4xl text-blue-900 font-semibold">{{ product.name }}</h2>
        <span class="text-xl">IDR {{ product.price }}</span>
      </div>
      <div class="flex-1">
        <div class="slider">
          <div class="preview">
            <div
              class="shadow-lg item rounded-lg w-full md:w-100 h-full overflow-hidden mx-2" 
             >
              <img
                :src="product.product_galleries[0].image"
                alt=""
                class="object-cover w-100 h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Start section kiri -->
      <div
        class="flex-1 md:sticky md:top-24 mt-0 md:mr-52 md:px-10 md:py-6 md:h-100 mx-5 my-4 w-auto"
      >
        <div class="hidden md:block">
          <h2 class="text-5xl text-blue-900 font-semibold mb-2">
            {{ product.name }}
          </h2>
          <div class="relative pt-3 pb-3">
            <div class="relative flex">
              <p class="text-xl font-semibold text-blue-900 mr-2">4.0</p>
              <img class="relative w-5 h-5 mt-1 mr-1" :src="starYellow" alt="" />
              <img class="relative w-5 h-5 mt-1 mr-1" :src="starYellow" alt="" />
              <img class="relative w-5 h-5 mt-1 mr-1" :src="starYellow" alt="" />
              <img class="relative w-5 h-5 mt-1 mr-1" :src="starYellow" alt="" />
              <img class="relative w-5 h-5 mt-1 mr-2" :src="starGray" alt="" />
              <p class="text-gray-400 flex text-xl font-medium mr-2">|</p>
              <p class="text-blue-900 flex text-xl font-medium mr-2">50Kg</p>
              <p class="text-gray-400 flex text-xl font-medium mr-2">Terjual</p>
              <p class="text-gray-400 flex text-xl font-medium mr-2">|</p>
              <p class="text-gray-400 flex text-xl font-medium mr-2">Stok</p>
              <p class="text-blue-900 flex text-xl font-medium mr-2">
                {{ product.stock }}
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <!-- <p class="text-2xl font-medium text-gray-400 line-through mb-2">
						IDR {{ product.price }}
					</p> -->
            <!-- DISKON -->
            <!-- <span class="w-auto px-3 py-2 ml-2 rounded-md bg-blue-700 text-sm font-light text-white">
						50% Off
					</span> -->
          </div>
          <p class="text-5xl font-medium text-blue-700">
            IDR {{ product.price }}/kg
          </p>
        </div>

        <div class="py-2">
          <p class="text-gray-400 flex text-xl font-medium mb-1">Pengiriman</p>
          <p class="text-blue-900 flex text-2xl font-medium mb-1">
            Kota Jakarta Barat
            <span class="px-2 py-1"
              ><svg
                width="20"
                height="15"
                viewBox="0 0 22 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.738 0.676406V4.72441L11.02 16.3164L0.394001 4.72441V0.676406L11.02 12.2684L21.738 0.676406Z"
                  fill="#C7C7C7"
                />
              </svg>
            </span>
          </p>
          <p class="text-black flex text-xl font-normal mb-1">
            Rp.0 - RP.15,000
            <span class="px-2 py-1"
              ><svg
                width="20"
                height="15"
                viewBox="0 0 22 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.738 0.676406V4.72441L11.02 16.3164L0.394001 4.72441V0.676406L11.02 12.2684L21.738 0.676406Z"
                  fill="#C7C7C7"
                />
              </svg>
            </span>
          </p>
        </div>

        <div class="py-2">
          <p class="text-gray-400 flex text-xl font-medium mb-1">Kuantitas</p>
          <div
            class="flex flex-row border h-10 w-56 rounded-lg border-gray-300 relative"
          >
            <button
              @click="OrderQuantity('-')"
              class="font-semibold border-r bg-white hover:bg-gray-300 text-blue-900 border-gray-300 h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
            >
              <span class="m-auto">-</span>
            </button>
            <input
              type="hidden"
              class="md:p-2 p-1 text-xs md:text-base border-gray-300 focus:outline-none text-center"
              readonly
              name="custom-input-number"
            />
            <div
              class="bg-white w-56 text-xs md:text-base flex items-center justify-center cursor-default"
            >
              <span>{{ order.quantity }}</span>
            </div>

            <button
              @click="OrderQuantity('+')"
              class="font-semibold border-l bg-white hover:bg-gray-300 text-blue-900 border-gray-300 h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
            >
              <span class="m-auto">+</span>
            </button>
          </div>
        </div>

        <div class="flex flex-wrap py-4">
          <button
            @click.prevent="addToCart()"
            class="flex-none my-2 btn btn-secondary px-6"
          >
            + Keranjang
          </button>

          <button
            @click.prevent="midtrans_pay()"
            class="flex-none my-2 btn btn-primary px-6 ml-4 md:ml-6"
          >
            Beli Sekarang
          </button>
        </div>
      </div>
      <!-- End section kiri -->

      <div class="w-96 md:w-100 pb-2">
        <!-- Start about -->
        <div class="px-6">
          <h6 class="text-xl font-semibold mb-4">Deskripsi</h6>
          <p class="text-xl leading-7 mb-2">
            {{ product.description }}
          </p>
          <!-- <p class="text-xl leading-7 mb-6">
          Kepiting terdapat di semua samudra dunia. Ada pula kepiting air tawar
          dan darat, khususnya di wilayah-wilayah tropis. Rajungan adalah
          kepiting yang hidup di perairan laut dan jarang naik ke pantai,
          sedangkan yuyu adalah ketam penghuni perairan tawar (sungai dan
          danau).
        </p> -->
          <!-- <p class="text-xl leading-7 mb-6">
					Kepiting beraneka ragam ukurannya, dari ketam kacang, yang lebarnya hanya
					beberapa milimeter, hingga kepiting laba-laba Jepang, dengan rentangan kaki
					hingga 4 m.
				</p> -->
        </div>
        <!-- End about -->

        <!-- Start toko -->
        <div class="w-auto shadow-lg mt-5 md:w-100 mx-4 px-6 py-3 rounded-xl">
          <h1 class="text-3xl font-semibold text-blue-900 pb-4">Toko</h1>
          <div class="flex flex-wrap">
            <div class="mx-16 md:mx-0">
              <img :src="tokoImg" alt="" class="px-4 w-50 h-50" />
              <p style="margin: 7%;" class="text-xl font-semibold py-2">{{ product.owner.name }}</p>
            </div>
            <div class="flex flex-wrap">
              <div class="mx-4 md:mx-3 my-3 md:my-6">
                <p class="text-lg font-medium text-gray-400">Penilaian</p>
                <p class="text-lg font-medium text-blue-600">100RB</p>
              </div>
              <div class="mx-9 md:mx-3 my-3 md:my-6">
                <p class="text-lg font-medium text-gray-400">Produk</p>
                <p class="text-lg font-medium text-blue-600">150</p>
              </div>
              <div class="mx-4 md:mx-3 my-3 md:my-6">
                <p class="text-lg font-medium text-gray-400">Bergabung</p>
                <p class="text-lg font-medium text-blue-600">2021</p>
              </div>
              <div class="mx-4 md:mx-3 my-3 md:my-6">
                <p class="text-lg font-medium text-gray-400">Pengikut</p>
                <p class="text-lg font-medium text-blue-600">100JT</p>
              </div>
            </div>
          </div>
          <!-- DATA RESPON DARI SNAP AKAN DIKIRIM MELALUI FORM YG KEMUDIAN DISIMPAN DI DATABASE -->
          <!-- {{ snap }} -->
        </div>
        <!-- End toko -->
      </div>
      
    </div>
    <div class="w-auto h-auto">
      <h1 class="flex text-3xl pl-6 md:pl-16 pt-2 font-semibold">Penilaian</h1>

      <!-- start komen 1 -->
      <div class="pt-2 mx-3 md:mx-14">
        <div
          class="flex-shrink-0 my-6 mx-2 md:mx-4 relative overflow-hidden h-auto rounded-lg w-full bg-white border border-gray-100"
        >
          <div class="flex mx-2">
            <img class="hidden md:block w-40 h-40 p-5" :src="tokoImg" alt="" />
            <div class="relative px-3 py-5">
              <span class="block text-black text-xl font-semibold -mb-1"
                >Jamal Ahmad</span
              >
              <div class="relative pt-3 pb-6">
                <div class="relative flex">
                  <p class="text-xl font-semibold text-blue-900 mr-2">4.0</p>
                  <img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
                  <img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
                  <img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
                  <img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
                  <img class="relative w-6 h-6 mr-2" :src="starGray" alt="" />
                </div>
                <span class="block text-black text-sm md:text-xl pt-3"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident porro obcaecati excepturi, a vel recusandae
                  voluptatibus? Provident architecto, facilis fugiat, molestiae
                  aliquid eaque atque quo molestias repellat quibusdam, quia
                  cum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident porro obcaecati excepturi, a vel recusandae
                  voluptatibus?</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end komen 1 -->

      <!-- start komen 2 -->
      <div class="mx-3 md:mx-14">
        <div
          class="flex-shrink-0 my-6 mx-2 md:mx-4 relative overflow-hidden h-auto rounded-lg w-full bg-white border border-gray-100"
        >
          <div class="flex mx-2">
            <img class="hidden md:block w-40 h-40 p-5" :src="tokoImg" alt="" />
            <div class="relative px-3 py-5">
              <span class="block text-black text-xl font-semibold -mb-1"
                >Jamal Ahmad</span
              >
              <div class="relative pt-3 pb-6">
                <div class="relative flex">
                  <p class="text-xl font-semibold text-blue-900 mr-2">4.0</p>
                  <img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
                  <img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
                  <img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
                  <img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
                  <img class="relative w-6 h-6 mr-2" :src="starGray" alt="" />
                </div>
                <span class="block text-black text-sm md:text-xl pt-3"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident porro obcaecati excepturi, a vel recusandae
                  voluptatibus? Provident architecto, facilis fugiat, molestiae
                  aliquid eaque atque quo molestias repellat quibusdam, quia
                  cum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident porro obcaecati excepturi, a vel recusandae
                  voluptatibus?</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end komen 2 -->

      <!-- start komen 3 -->
      <div class="mx-3 md:mx-14">
        <div
          class="flex-shrink-0 my-6 mx-2 md:mx-4 relative overflow-hidden h-auto rounded-lg w-full bg-white border border-gray-100"
        >
          <div class="flex mx-2">
            <img class="hidden md:block w-40 h-40 p-5" :src="tokoImg" alt="" />
            <div class="relative px-3 py-5">
              <span class="block text-black text-xl font-semibold -mb-1"
                >Jamal Ahmad</span
              >
              <div class="relative pt-3 pb-6">
                <div class="relative flex">
                  <p class="text-xl font-semibold text-blue-900 mr-2">4.0</p>
                  <img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
                  <img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
                  <img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
                  <img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
                  <img class="relative w-6 h-6 mr-2" :src="starGray" alt="" />
                </div>
                <span class="block text-black text-sm md:text-xl pt-3"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident porro obcaecati excepturi, a vel recusandae
                  voluptatibus? Provident architecto, facilis fugiat, molestiae
                  aliquid eaque atque quo molestias repellat quibusdam, quia
                  cum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident porro obcaecati excepturi, a vel recusandae
                  voluptatibus?</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end komen 3 -->

      <div class="flex flex-wrap items-end justify-end my-4 mx-6">
        <div
          class="w-12 h-auto p-4 mr-4 flex items-center justify-center bg-white border-2 border-gray-200 rounded-lg"
        >
          <span class="text-lg font-medium text-gray-200 flip">></span>
        </div>
        <div
          class="w-12 h-auto p-4 mr-4 flex items-center justify-center bg-blue-700 border-2 border-gray-200 rounded-lg"
        >
          <span class="text-lg font-semibold text-gray-200">1</span>
        </div>
        <div
          class="w-12 h-auto p-4 mr-4 flex items-center justify-center bg-white border-2 border-gray-200 rounded-lg"
        >
          <span class="text-lg font-semibold text-gray-200">2</span>
        </div>
        <div
          class="w-12 h-auto p-4 mr-4 flex items-center justify-center bg-white border-2 border-gray-200 rounded-lg"
        >
          <span class="text-lg font-medium text-gray-200">></span>
        </div>
      </div>
    </div>
    <Special class="mt-6" />
    <Footer class="mt-6" />
  </div>
</template>

<script>
import starYellow from "../assets/images/design/star-yellow.png";
import starGray from "../assets/images/design/star-gray.png";
import tokoImg from "../assets/images/content/toko-img.png";
import Special from "@/components/Special.vue";
import Footer from "@/components/Footer.vue";


import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "Detail",

  components: {
    Special,
    Footer,
  },

  data: function () {
    return {
      starYellow: starYellow,
      starGray: starGray,
      tokoImg: tokoImg,

      product: {},

      order: {
        quantity: 1,
      },

      snap: {
        //Informasi ini didapat dari midtrans, kemudian akan disimpan ke database
        result_data: null,
        result_type: null,
        order_data: null,
      },

      user_id: null,

      //LOCAL STATE of Component
      state: {
        contents_loaded: false,
      },
    };
  },

  methods: {
    // ...mapActions({
    //   addProductToCart: "cart/addProductToCart",
    // }),

    // Mengambil Produk
    async getProductDetails(id) {
      return await axios.get("v1/products?id=" + id); //Mengambil detail produk berdasarkan id produk
    },

    OrderQuantity(operator) {
      switch (operator) {
        case "+":
          if (this.order.quantity >= this.product.stock) {
            //ORDER TIDAK BISA MELEBIHI STOK BARANG
            break;
          }
          this.order.quantity += 1;
          break;
        case "-":
          if (this.order.quantity <= 1) {
            //ORDER TIDAK BISA KURANG DARI 1
            break;
          }
          this.order.quantity -= 1;
          break;

        default:
          break;
      }
    },

    // Manipulasi data dari response yg diterima snap.js
    changeResult(type, data) {
      this.snap.result_type = type;
      this.snap.result_data = data;
      this.snap.order_data = {
        orders: [
          {
            // ORDER DARI ADMIN 1
            order_from: this.product.owner.id,
            customer_id: this.user_id,
            order_data: [
              {
                // DETAIL PRODUK dari ADMIN ID 1
                product_id: this.product.id,
                quantity: this.order.quantity,
              },
            ],
          },
        ],
      };
    },

    addToCart() {
      if (!this.authenticated) {
        alert("You are not logged in");
        this.$router.replace({ name: "SignIn" });
        return;
      }

      this.$store.dispatch("cart/addProductToCart", {
        orders: [
          {
            order_from: this.product.owner.id,
            order_from_name: this.product.owner.name,
            customer_id: this.user_id,
            order_data: [
              {
                product_id: this.product.id,
                product_name: this.product.name,
                product_image: this.product.product_galleries[0].image,
                product_price: this.product.price,
                quantity: this.order.quantity,
              },
            ],
          },
        ],
      });
    },

    //REQUEST TOKEN KE ANAKLAUT BACKEND
    async midtrans_pay() {
      if (!this.authenticated) {
        alert("You are not logged in");
        this.$router.replace({ name: "SignIn" });
        return;
      }

      await axios
        .post("v1/transaction/token", {
          orders: [
            {
              // ORDER DARI ADMIN 1
              order_from: this.product.owner.id,
              customer_id: this.user_id,
              order_data: [
                {
                  // DETAIL PRODUK dari ADMIN ID 1
                  product_id: this.product.id,
                  quantity: this.order.quantity,
                },
              ],
            },
          ],
        })
        .then((data) => {
          // console.log("SNAP TOKEN >> " + data.data.token);

          //eslint-disable-next-line no-undef
          snap.pay(data.data.token, {
            onSuccess: (res) => {
              // console.log(res);
              this.changeResult("success", res);
              // this.$refs.order_form.$el.submit()
              // this.$refs.order_form.click();
              axios
                .post("v1/transaction/finish", this.snap)
                .then((response) => {
                  console.log(response);
                });
            },

            onPending: (res) => {
              this.changeResult("pending", res);
              // console.log(this.snap);
              // this.$refs.order_form.click();
              axios
                .post("v1/transaction/finish", this.snap)
                .then((response) => {
                  //IF SUCCESS REDIRECT TO SUCCESS PAGE
                  this.$store.dispatch("SET_STATUS_ORDER", true);
                  this.$route.replace({ name: "Success" });
                  console.log(response);
                });
            },

            onError: function (res) {
              console.log(res);
              this.changeResult("error", res);
              // axios.post('v1/transaction/finish', this.snap)
            },
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },

  mounted() {
    // let externalScript = document.createElement("script"); //load Mitrans Snap.js
    // externalScript.setAttribute(
    //   "src",
    //   "https://app.sandbox.midtrans.com/snap/snap.js"
    // );
    // externalScript.setAttribute(
    //   "data-client-key",
    //   "SB-Mid-client-OPf5-6qjuxV6DrHf"
    // );
    // document.head.appendChild(externalScript);
  },

  created() {
    this.getProductDetails(this.$route.params.id)
      .then((res) => {
        // console.log(res.data.data);
        this.product = res.data.data;
        this.state.contents_loaded = true;

        // console.log("Product Owner ID => " + this.product.owner.id);
        // console.log(this.$store.getters["auth/user"])
      })
      .catch((e) => {
        console.log(e);
      });

    //GET USER/CUSTOMER ID from VUEX
    if (this.$store.getters["auth/user"]) {
      this.user_id = this.$store.getters["auth/user"].id;
    }
  },
};
</script>
