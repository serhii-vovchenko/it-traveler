<script setup>
import IButton from '../IButton/IButton.vue';
import IModal from '../IModal/IModal.vue';

defineProps({
	title: {
		type: String,
		default: '',
	},
	modalIsOpen: {
		type: Boolean,
		default: false,
	},
	isLoading: {
		type: Boolean,
		default: false,
	},
	hasError: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(['cancel', 'confirm']);
</script>

<template>
	<IModal v-if="modalIsOpen" @close="emit('cancel')">
		<div class="mb-4 text-lg text-gray">{{ title }}</div>
		<div class="flex gap-3 justify-center">
			<IButton
				class="bg-transparent border-primary border-[1px]"
				:text-color="'text-gray'"
				@click="emit('cancel')"
				>Відхилити</IButton
			>
			<IButton variant="gradient" :is-loading="isLoading" @click="emit('confirm')">
				Підтвердити
			</IButton>
		</div>
		<div v-if="hasError" class="text-red-500">Щось пішло не так</div>
	</IModal>
</template>
