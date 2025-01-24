<script setup>
import IInput from '@/components/IInput/IInput.vue';
import FormContainer from '../FormContainer.vue';
import { reactive, toRaw } from 'vue';
import IButton from '@/components/IButton/IButton.vue';

const userData = reactive({
	userEmail: '',
	userPassword: '',
});

const emit = defineEmits(['submit']);
</script>

<template>
	<FormContainer @submit.prevent="emit('submit', toRaw(userData))">
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

		<IButton class="w-full" variant="gradient">Увійти</IButton>
	</FormContainer>
</template>
