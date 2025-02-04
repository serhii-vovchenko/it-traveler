<script setup>
import { RouterView, RouterLink } from 'vue-router';
import BaseLayout from '@/layouts/BaseLayout.vue';
</script>

<template>
	<BaseLayout>
		<section class="p-10 rounded-2xl bg-white">
			<div class="flex gap-11 justify-center mb-10">
				<RouterLink to="registration" class="text-[#2C2C2C33]" exact-active-class=" text-primary">
					Створити аккаунт
				</RouterLink>
				<RouterLink to="login" class="text-[#2C2C2C33]" exact-active-class=" text-primary">
					Увійти
				</RouterLink>
			</div>
			<RouterView />
		</section>
	</BaseLayout>
</template>
