<script setup>
import { logoutUser } from '@/api/user';
import LogoutIcon from './LogoutIcon.vue';
import { useMutation } from '@/composables/useMutation';
import { useRouter } from 'vue-router';
import { authService } from '@/api/AuthService';

const router = useRouter();

const { mutation: logout, isLoading } = useMutation({
	mutationFn: () => logoutUser(),
	onSuccess: () => {
		authService.clearToken();
		router.replace('auth/login');
	},
});
</script>

<template>
	<button @click="logout" class="flex gap-2 items-center px-6 text-black">
		<span v-if="isLoading">Loading...</span>
		<span v-else>Вихід</span>
		<LogoutIcon />
	</button>
</template>
