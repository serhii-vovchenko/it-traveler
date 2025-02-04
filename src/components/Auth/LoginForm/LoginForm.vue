<script setup>
import IInput from '@/components/IInput/IInput.vue';
import { reactive, toRaw } from 'vue';
import IButton from '@/components/IButton/IButton.vue';

const props = defineProps({
	isLoading: {
		default: false,
		type: Boolean,
	},
});

const userData = reactive({
	email: '',
	password: '',
});

const emit = defineEmits(['submit']);
</script>

<template>
	<form @submit.prevent="emit('submit', toRaw(userData))">
		<IInput
			v-model="userData.email"
			class="mb-4"
			label="Електронна пошта"
			type="email"
			placeholder="Email@gmail.com"
		/>

		<IInput
			v-model="userData.password"
			class="mb-10"
			label="Пароль"
			type="password"
			placeholder="Password"
		/>

		<IButton type="submit" class="w-full" variant="gradient" :is-loading="props.isLoading"
			>Увійти</IButton
		>
	</form>
</template>
