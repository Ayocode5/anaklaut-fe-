<template>
	<div class="w-full h-auto">
		<h1 class="flex text-3xl pl-6 md:pl-16 pt-8 font-semibold">
			Khusus untuk kamu
		</h1>

		<div
			class="scrollbar pt-2 mx-5 md:mx-14 flex overflow-x-scroll md:overflow-hidden"
		>
			<!-- start ikan -->
			<div
				class="flex-shrink-0 my-6 mx-2 md:mx-4 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="ikanTongkol" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-xl font-semibold -mb-1"
						>Ikan Tongkol</span
					>
					<span class="block text-black text-md font-light -mb-1">RP. 15.000</span>
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
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end ikan -->

			<!-- start kepiting -->
			<div
				class="flex-shrink-0 my-6 mx-2 md:mx-4 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="kepitingRajungan" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-lg font-semibold -mb-1"
						>Kepiting Rajungan</span
					>
					<span class="block text-black text-md font-light -mb-1">RP. 40.000</span>
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
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end kepiting -->

			<!-- start lobster -->
			<div
				class="flex-shrink-0 my-6 mx-2 md:mx-4 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="lobsterPasir" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-xl font-semibold -mb-1"
						>Lobster Pasir</span
					>
					<span class="block text-black text-md font-light -mb-1">RP. 10.000</span>
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
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end lobster -->

			<!-- start udang -->
			<div
				class="flex-shrink-0 my-6 mx-2 md:mx-4 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="udangJerbung" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-xl font-semibold -mb-1"
						>Udang Jerbung</span
					>
					<span class="block text-black text-md font-light -mb-1">RP. 25.000</span>
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
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end udang -->

			<!-- start cumi -->
			<div
				class="flex-shrink-0 my-6 mx-2 md:mx-4 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="cumiCumi" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-xl font-semibold -mb-1">Cumi-cumi</span>
					<span class="block text-black text-md font-light -mb-1">RP. 10.000</span>
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
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end cumi -->

			<!-- start sotong -->
			<div
				class="flex-shrink-0 my-6 mx-2 md:mx-4 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="sotong" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-xl font-semibold -mb-1">Sotong</span>
					<span class="block text-black text-md font-light -mb-1">RP. 20.000</span>
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
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end sotong -->
		</div>
	</div>
</template>

<script>
import ikanTongkol from "../assets/images/content/ikan-tongkol.png";
import kepitingRajungan from "../assets/images/content/kepiting-rajungan.png";
import lobsterPasir from "../assets/images/content/lobster-pasir.png";
import cumiCumi from "../assets/images/content/cumi-cumi.png";
import udangJerbung from "../assets/images/content/udang-jerbung.png";
import sotong from "../assets/images/content/sotong.png";
import starYellow from "../assets/images/design/star-yellow.png";
import starGray from "../assets/images/design/star-gray.png";

export default {
	data: function() {
		return {
			ikanTongkol: ikanTongkol,
			kepitingRajungan: kepitingRajungan,
			lobsterPasir: lobsterPasir,
			cumiCumi: cumiCumi,
			udangJerbung: udangJerbung,
			sotong: sotong,
			starYellow: starYellow,
			starGray: starGray,
		};
	},
	name: "Special",
};
</script>
