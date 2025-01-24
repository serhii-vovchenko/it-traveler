<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue';
import IButton from '../IButton/IButton.vue';

const props = defineProps({
	items: {
		required: true,
		type: Array,
	},
	activeId: {
		required: true,
		type: [Number, null],
	},
});

const emit = defineEmits(['place-clicked']);
</script>

<template>
	<div class="px-6 min-w-[320px] max-w-[379px]">
		<h3 class="text-gray mb-[18px]">Додані маркери</h3>
		<FavoritePlace
			v-for="place in props.items"
			:key="place.id"
			:title="place.title"
			:description="place.description"
			:img="place.img"
			:isActive="place.id === props.activeId"
			@click="emit('place-clicked', place.id)"
		/>
		<IButton class="w-full mt-10" variant="gradient" type="submit">Додати маркер</IButton>
	</div>
</template>
