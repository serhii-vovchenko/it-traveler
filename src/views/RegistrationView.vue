<script setup>
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue';
// import { registerUser } from '@/api/user';
import { authService } from '@/api/AuthService';
import { useRouter } from 'vue-router';
import { useMutation } from '@/composables/useMutation';

const navigate = useRouter();

const {
	isLoading,
	error,
	mutation: handleRegisterUser,
} = useMutation({
	mutationFn: data => authService.registerUser(data),
	onSuccess: () => {
		navigate.replace('/map');
	},
});

// const isLoading = ref(false);

// const handleRegisterUser = async userData => {
// 	isLoading.value = true;
// 	try {
// 		await registerUser(userData);
// 		navigate.replace('/map');
// 	} catch (error) {
// 		console.error(error);
// 	} finally {
// 		isLoading.value = false;
// 	}
// };
</script>

<template>
	<RegistrationForm @submit="handleRegisterUser" :is-loading="isLoading" />
	<p v-if="error" class="text-red-500 text-center">{{ error.message }}</p>
</template>
