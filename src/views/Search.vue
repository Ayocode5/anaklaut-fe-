<template>
  <div>
    <h1 class="flex mx-8 mt-4 text-2xl text-bold text-blue-900">
      Hasil Pencarian Anda: 
      {{ searchData.data.data.length }}
    </h1>
    <div class="flex flex-warp">
      <div
        class="flex flex-wrap w-80 h-86 mx-8 my-6 p-4 bg-gray-50 rounded-lg hidden md:block"
      >
        <div class="">
          <h1 class="mt-2 text-xl text-bold text-blue-900">Filters</h1>
          <!-- start lokasi -->
          <h1 class="my-2 text-lg text-bold text-blue-900">Lokasi</h1>
          <!-- start jakarta -->
          <label
            class="select-none container block relative cursor-pointer text-xl pl-8"
            >Jakarta
            <input
              class="absolute opacity-0 left-0 top-0 cursor-pointer"
              type="checkbox"
            />
            <span
              class="h-6 w-6 checkmark absolute top-0 left-0 border-2 border-gray-400"
            ></span>
          </label>
          <!-- end jakarta -->
          <!-- start Bekasi -->
          <label
            class="select-none container block relative cursor-pointer text-xl pl-8"
            >Bekasi
            <input
              class="absolute opacity-0 left-0 top-0 cursor-pointer"
              type="checkbox"
            />
            <span
              class="h-6 w-6 checkmark absolute top-0 left-0 border-2 border-gray-400"
            ></span>
          </label>
          <!-- end Bekasi -->
          <!-- start Bogor -->
          <label
            class="select-none container block relative cursor-pointer text-xl pl-8"
            >Bogor
            <input
              class="absolute opacity-0 left-0 top-0 cursor-pointer"
              type="checkbox"
            />
            <span
              class="h-6 w-6 checkmark absolute top-0 left-0 border-2 border-gray-400"
            ></span>
          </label>
          <!-- end Bogor -->
        </div>
        <!-- end lokasi -->

        <!-- start pembayaran -->
        <div class="">
          <h1 class="my-2 text-lg text-bold text-blue-900">Pembayaran</h1>
          <!-- start cod -->
          <label
            class="select-none container block relative cursor-pointer text-xl pl-8"
            >COD (Cash On Delivery)
            <input
              class="absolute opacity-0 left-0 top-0 cursor-pointer"
              type="checkbox"
            />
            <span
              class="h-6 w-6 checkmark absolute top-0 left-0 border-2 border-gray-400"
            ></span>
          </label>
          <!-- end cod -->
        </div>
        <!-- end pembayaran -->

        <div class="my-6">
          <button type="submit" class="btn btn-primary px-24 mx-3 md:mx-0">
            Terapkan
          </button>
        </div>
      </div>

      <!-- start produk -->
      <div v-if="searchData != null" class="mx-6 md:mx-0 flex flex-wrap">
        <!-- start product loop -->
        <div
          v-for="product in searchData.data.data"
          :key="product"
          class="flex-shrink-0 my-2 md:my-6 mx-2 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
        >
          <div class="relative flex items-center justify-center">
            <img
              class="relative w-48 h-32 p-3"
              :src="product.product_galleries[0].image"
              alt=""
            />
          </div>
          <div class="relative text-white px-6 py-5">
            <span class="block text-black text-xl font-semibold -mb-1">{{
              product.name
            }}</span>
            <span class="block text-black text-md font-light -mb-1"
              >RP. {{ product.price }}</span
            >
          </div>
          <div class="relative px-3 py-1 border-t border-gray-100">
            <div class="relative flex items-end justify-end">
              <img class="relative w-4 mr-1" :src="starYellow" alt="" />
              <img class="relative w-4 mr-1" :src="starYellow" alt="" />
              <img class="relative w-4 mr-1" :src="starYellow" alt="" />
              <img class="relative w-4 mr-1" :src="starYellow" alt="" />
              <img class="relative w-4" :src="starGray" alt="" />
            </div>
            <span
              class="block text-black flex items-end justify-end text-md font-light"
              >Jakarta Timur</span
            >
          </div>
          <router-link :to="'/details/'+product.id" class="stretched-link">
            <!-- fake children -->
          </router-link>
        </div>
      </div>
      <div v-if="searchData.data.data.length == 0" class="mx-6 md:mx-0 flex flex-wrap">
        <h1>Product not found!</h1>
      </div>
      <!-- end produk -->
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "Search",
  components: {
    Footer,
  },

  data() {
    return {
      searchData: null, //Should Return an Object
    };
  },

  methods: {
    setSearchData(val) {
      this.searchData = val;
    },
  },

  created() {
    this.setSearchData(this.$store.getters["search/getResults"]);
  },

  watch: {
    "$store.state.search.results": {
      handler() {
        this.setSearchData(this.$store.getters["search/getResults"]);
      },
    },
  },
};
</script>

<style>
</style>