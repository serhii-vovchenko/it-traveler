<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	variant: {
		default: 'primary',
		type: String,
		validator: value => {
			return ['primary', 'gradient', 'outline'].includes(value);
		},
	},
});

const bgStyles =
	props.variant === 'gradient' ? ' bg-gradient-to-r from-[#FFA279] to-[#F3743D]' : 'bg-[#FFA279]';
</script>

<template>
	<button
		class="rounded-xl py-[14px] px-[40px] text-white font-bold -tracking-wider text-[16px]"
		:class="bgStyles"
	>
		<slot>Press Enter</slot>
	</button>
</template>
