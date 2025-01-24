<script setup>
import { onMounted, onUnmounted } from 'vue';
import CrossIcon from './CrossIcon.vue';

const emit = defineEmits(['close']);

onMounted(() => {
	document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
	document.body.style.overflow = 'initial';
});
</script>

<template>
	<Teleport to="body">
		<div
			@click.self="emit('close')"
			class="flex w-full h-full fixed left-0 top-0 overflow-auto bg-black bg-opacity-50"
		>
			<div class="p-10 bg-white relative min-w-[350px] m-auto text-black rounded-2xl">
				<button class="absolute top-3 right-3">
					<CrossIcon @click="emit('close')" class="w-6 h-6" />
				</button>
				<slot></slot>
			</div>
		</div>
	</Teleport>
</template>
