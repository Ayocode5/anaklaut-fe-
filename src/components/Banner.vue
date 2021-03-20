<template>
	<div>
		<!-- component -->
		<div
			class="flex flex-wrap justify-center items-center inline-block overflow-hidden"
		>
			<!-- start bergabung -->
			<div
				class="flex md:w-auto -mx-5 md:mx-9 py-3 md:py-10 bg-cover card bg-content-100"
			>
				<div class="card bg-blue-50 lg:card-side">
					<!-- start content -->
					<div class="max-w-md card-body">
						<h2 class="card-title">
							Bersama Nelayan Indonesia <br />
							Untuk Masa Depan Yang Cerah
						</h2>
						<div class="card-actions">
							<button class="btn btn-primary rounded-full px-10">Bergabung</button>
						</div>
					</div>
					<!-- end content -->

					<!-- start image -->
					<figure class="hidden md:block">
						<img :src="joinUs" alt="join us" class="w-24 h-52" />
					</figure>
					<!-- end image -->
				</div>
			</div>
			<!-- end bergabung -->

			<!-- start belanja -->
			<div
				class="flex w-auto -mx-5 md:mx-9 py-6 md:py-10 bg-cover card bg-content-100"
			>
				<div class="card bg-green-50 lg:card-side">
					<!-- start content -->
					<div class="max-w-md card-body">
						<h2 class="card-title pl-2 pt-2">
							Cintai Ikan di Laut Mu <br />
							Olah Ikan dengan Lebih Bijak
						</h2>
						<div class="card-actions">
							<button class="btn btn-primary rounded-full ml-2 px-10">
								Mulai Belanja
							</button>
						</div>
					</div>
					<!-- end content -->

					<!-- start image -->
					<figure class="hidden md:block">
						<img :src="startShop" alt="join us" class="w-24 h-52" />
					</figure>
					<!-- end image -->
				</div>
			</div>
			<!-- end belanja -->
		</div>
	</div>
</template>

<script>
import joinUs from "../assets/images/design/joinUs.png";
import startShop from "../assets/images/design/startShop.png";

export default {
	data: function() {
		return {
			joinUs: joinUs,
			startShop: startShop,
		};
	},
	name: "Banner",
};
</script>
