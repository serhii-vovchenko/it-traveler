<script setup>
import IButton from '@/components/IButton/IButton.vue';
import IInput from '@/components/IInput/IInput.vue';
import { reactive, toRaw } from 'vue';
import FormContainer from '../FormContainer.vue';

const emit = defineEmits(['submit']);

const userData = reactive({
	userName: '',
	userEmail: '',
	userPassword: '',
});
</script>

<template>
	<FormContainer @submit.prevent="emit('submit', toRaw(userData))">
		<IInput
			v-model="userData.userName"
			class="mb-4"
			label="Повне ім’я"
			placeholder="What is your name?"
		/>

		<IInput
			v-model="userData.userEmail"
			class="mb-4"
			label="Електронна пошта"
			type="email"
			placeholder="Email@gmail.com"
		/>

		<IInput
			v-model="userData.userPassword"
			class="mb-10"
			label="Пароль"
			type="password"
			placeholder="Password"
		/>
		<IButton class="w-full" variant="gradient">Створити аккаунт</IButton>
	</FormContainer>
</template>
