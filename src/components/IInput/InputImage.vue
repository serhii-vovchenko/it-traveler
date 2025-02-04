<script setup>
import UploadIcon from './UploadIcon.vue';

const emit = defineEmits(['uploaded']);

const handleUploadImage = e => {
	const file = e.target.files[0];
	const fileReader = new FileReader();

	fileReader.readAsDataURL(file);

	fileReader.onload = () => {
		emit('uploaded', fileReader.result);
	};
};
</script>

<template>
	<label class="cursor-pointer hover:text-primary">
		<input type="file" accept="image/*" class="hidden" @change="handleUploadImage" />
		<span class="flex gap-1 items-center underline text-xs">
			<UploadIcon class="fill-primary" />
			<slot></slot>
		</span>
	</label>
</template>
