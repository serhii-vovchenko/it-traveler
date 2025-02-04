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

	isLoading: {
		default: false,
		type: Boolean,
	},

	hasError: {},
});

const emit = defineEmits(['close', 'submit']);

const formData = reactive({
	title: '',
	description: '',
	img: '',
});

const handleUpload = url => {
	formData.img = url;
};

const uploadText = computed(() => {
	return !formData.img ? 'Натисніть тут, щоб додати фото' : 'Натисніть тут, щоб змінити фото';
});

const resetForm = () => {
	(formData.title = ''), (formData.description = ''), (formData.img = '');
};
</script>

<template>
	<IModal v-if="props.modalIsOpen" @close="emit('close')">
		<form @submit.prevent="emit('submit', formData, resetForm)" class="min-w-[419px]">
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
				v-if="formData.img"
				:src="formData.img"
				alt="image"
				class="w-20 h-20 object-cover mb-4"
			/>
			<InputImage @uploaded="handleUpload">{{ uploadText }}</InputImage>

			<IButton variant="gradient" class="w-full mt-[42px]" :is-loading="props.isLoading"
				>Додати</IButton
			>
			<p v-if="props.hasError" class="text-red-500" type="submit">Щось пішло не так</p>
		</form>
	</IModal>
</template>
