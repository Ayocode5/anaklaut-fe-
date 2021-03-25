<template>
	<div class="w-full h-auto bg-gray-50">
		<h1 class="flex text-3xl pl-10 md:pl-16 pt-8 font-semibold">
			Kategori
		</h1>

		<div class="pt-2 mx-5 md:mx-7 flex items-center justify-center flex-wrap">
			<!-- start ikan -->
			<div
				class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg shadow-xl max-w-xs bg-white"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-72 h-40 my-16" :src="ikan" alt="" />
				</div>
				<div class="relative text-white px-6 py-6">
					<span class="block text-black text-3xl font-semibold -mb-1">Ikan</span>
				</div>
			</div>
			<!-- end ikan -->

			<!-- start kepiting -->
			<div
				class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg shadow-xl max-w-xs bg-white"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-72 h-40 my-16" :src="kepiting" alt="" />
				</div>
				<div class="relative text-white px-6 py-6">
					<span class="block text-black text-3xl font-semibold -mb-1">Kepiting</span>
				</div>
			</div>
			<!-- end kepiting -->

			<!-- start lobster -->
			<div
				class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg shadow-xl max-w-xs bg-white"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-72 h-40 my-16" :src="lobster" alt="" />
				</div>
				<div class="relative text-white px-6 py-6">
					<span class="block text-black text-3xl font-semibold -mb-1">Lobster</span>
				</div>
			</div>
			<!-- end lobster -->

			<!-- start kerang -->
			<div
				class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg shadow-xl max-w-xs bg-white"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-72 h-40 my-16" :src="kerang" alt="" />
				</div>
				<div class="relative text-white px-6 py-6">
					<span class="block text-black text-3xl font-semibold -mb-1">Kerang</span>
				</div>
			</div>
			<!-- end kerang -->
		</div>
	</div>
</template>

<script>
import ikan from "../assets/images/content/ikan.png";
import kepiting from "../assets/images/content/kepiting.png";
import kerang from "../assets/images/content/kerang.png";
import lobster from "../assets/images/content/lobster.png";

export default {
	data: function() {
		return {
			ikan: ikan,
			kepiting: kepiting,
			kerang: kerang,
			lobster: lobster,
		};
	},
	name: "Category",
};
</script>
