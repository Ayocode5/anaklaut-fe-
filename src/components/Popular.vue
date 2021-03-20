<template>
	<div v-if="state.contents_loaded" class="w-full h-auto">
		<h1 class="flex text-3xl pl-6 md:pl-16 pt-2 font-semibold">
			Paling populer
		</h1>

		<div class="scrollbar pt-2 mx-5 md:mx-14 flex overflow-x-scroll md:overflow-hidden">
			<!-- start ikan -->
			<div class="flex-shrink-0 my-6 mx-2 md:mx-4 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
				v-for="product in products" :key="product.id"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="product.product_galleries[0].image" :key="product.id" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-xl font-semibold -mb-1"
						>{{ product.name }}</span
					>
					<span class="block text-black text-md font-light -mb-1">Rp. {{ product.price }}</span>
				</div>
				<div class="relative px-3 py-1 border-t border-gray-100">
					<div class="relative flex items-end justify-end">
						<img class="relative w-4 mr-1" src="@/assets/images/design/star-yellow.png" alt="" />
						<img class="relative w-4 mr-1" src="@/assets/images/design/star-yellow.png" alt="" />
						<img class="relative w-4 mr-1" src="@/assets/images/design/star-yellow.png" alt="" />
						<img class="relative w-4 mr-1" src="@/assets/images/design/star-yellow.png" alt="" />
						<img class="relative w-4" src="@/assets/images/design/star-gray.png" alt="" />
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
			<!-- end ikan -->
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: "Popular",

	data: function() {
		return {
			products: [],
			state: {
				contents_loaded: false
			}
		};
	},

	created() {
		this.getProduct()
	},

	methods: {
		async getProduct() {
			let x = await axios.get('v1/products');
			// console.log(x.data.data.data);
			x.data.data.data.forEach(element => {
				this.products.push(element)
				// console.log(element)
			});

			this.state.contents_loaded = true
		}	
	}
	
};
</script>
