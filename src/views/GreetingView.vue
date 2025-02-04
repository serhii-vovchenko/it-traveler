<script setup>
import IButton from '../components/IButton/IButton.vue';

import BaseLayout from '@/layouts/BaseLayout.vue';
</script>

<template>
	<BaseLayout>
		<div class="text-center">
			<img class="inline-block mb-6" src="../assets/img/map-pin.svg" alt="location_image" />
			<h1 class="font-bold text-[38px] mb-7">IT traveler</h1>
			<p class="text-lg leading-6 mb-11 m-auto max-w-[508px]">
				Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також
				ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
			</p>
			<IButton to="auth/registration">Почати роботу</IButton>
		</div>
	</BaseLayout>
</template>
