<script setup>
import LoginForm from '../components/Auth/LoginForm/LoginForm.vue';
// import { loginUser } from '../api/user/index.js';
import { authService } from '@/api/AuthService';

import { useRouter } from 'vue-router';
import { useMutation } from '@/composables/useMutation';

const navigate = useRouter();

const {
	isLoading,
	error,
	mutation: handleLoginUser,
} = useMutation({
	mutationFn: data => authService.loginUser(data),
	onSuccess: () => {
		navigate.replace('/map');
	},
});
// const isLoading = ref(false);

// const handleLoginUser = async body => {
// 	isLoading.value = true;

// 	try {
// 		await loginUser(body);
// 		navigate.replace('/map');
// 	} catch (error) {
// 		console.error(error);
// 	} finally {
// 		isLoading.value = false;
// 	}
// };
</script>

<template>
	<LoginForm @submit="handleLoginUser" :is-loading="isLoading" />
	<p v-if="error" class="text-red-500 text-center">{{ error.message }}</p>
</template>
