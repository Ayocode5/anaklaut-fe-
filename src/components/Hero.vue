<template>
	<div class="hero">
		<img :src="image" alt="gambar hero" class="w-auto h-40 md:h-auto" />
		<div class="text-white">
			<div class=" p-4 md:p-24">
				<h1 class=" mb-4 md:mb-7 text-xl md:text-5xl font-bold">
					Laut Kami, <br />
					Untuk Kami.
				</h1>

				<button class="btn btn-primary px-6 md:px-8">
					Jelajahi
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import heroImg from "../assets/images/design/hero-img.png";

export default {
	data: function() {
		return {
			image: heroImg,
		};
	},
	name: "Hero",
};
</script>
