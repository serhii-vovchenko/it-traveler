<script setup>
import { computed, reactive } from 'vue';
import IButton from '../IButton/IButton.vue';
import MarkerIcon from '../icons/MarkerIcon.vue';
import IInput from '../IInput/IInput.vue';
import InputImage from '../IInput/InputImage.vue';
import IModal from '../IModal/IModal.vue';

const props = defineProps({
	modalIsOpen: {
		default: false,
		type: Boolean,
	},
});

const emit = defineEmits(['close', 'submit']);

const formData = reactive({
	title: '',
	description: '',
	imageUrl: '',
});

const handleUpload = url => {
	formData.imageUrl = url;
};

const uploadText = computed(() => {
	return !formData.imageUrl ? 'Натисніть тут, щоб додати фото' : 'Натисніть тут, щоб змінити фото';
});
</script>

<template>
	<IModal v-if="props.modalIsOpen" @close="emit('close')">
		<form @submit.prevent="emit('submit', formData)" class="min-w-[419px]">
			<div class="flex gap-2 items-center justify-center mb-[42px]">
				<MarkerIcon />
				<p class="font-bold text-center">Додати маркер</p>
			</div>
			<IInput
				v-model="formData.title"
				label="Локація"
				placeholder="Введіть локацію"
				class="mb-[18px]"
			/>
			<IInput
				v-model="formData.description"
				type="textarea"
				label="Опис"
				placeholder="Введіть текст"
				class="mb-4"
			/>
			<img
				v-if="formData.imageUrl"
				:src="formData.imageUrl"
				alt="image"
				class="w-20 h-20 object-cover mb-4"
			/>
			<InputImage @uploaded="handleUpload"> {{ uploadText }}</InputImage>
			<IButton variant="gradient" class="w-full mt-[42px]">Додати</IButton>
		</form>
	</IModal>
</template>
