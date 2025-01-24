<script setup>
import IButton from '../components/IButton/IButton.vue';
</script>

<template>
	<main class="flex h-screen">
		<section class="flex-1 flex justify-center items-center bg-primary">
			<div class="text-white text-center">
				<img class="inline-block mb-6" src="../assets/img/map-pin.svg" alt="location_image" />
				<h1 class="font-bold text-[38px] mb-7">IT traveler</h1>
				<p class="text-lg leading-6 mb-11 m-auto max-w-[508px]">
					Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також
					ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
				</p>
				<IButton>Почати роботу</IButton>
			</div>
		</section>
		<section class="flex-1">
			<img
				class="h-screen w-full object-cover"
				src="../assets/img/static-map.png"
				alt="map"
				width="700"
			/>
		</section>
	</main>
</template>
