<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
	variant: {
		default: 'primary',
		type: String,
		validator: value => {
			return ['primary', 'gradient', 'outline'].includes(value);
		},
	},
	to: String,
	isLoading: {
		default: false,
		type: Boolean,
	},
	textColor: String,
});

const bgStyles =
	props.variant === 'gradient' ? ' bg-gradient-to-r from-[#FFA279] to-[#F3743D]' : 'bg-[#FFA279]';

const textStyle = props.textColor || 'text-white';

const isLink = computed(() => !!props.to);

const componentName = computed(() => {
	return isLink.value ? RouterLink : 'button';
});

const link = computed(() => {
	return isLink.value ? props.to : undefined;
});
</script>

<template>
	<component
		:is="componentName"
		class="rounded-xl py-[14px] px-[40px] font-bold -tracking-wider text-[16px]"
		:class="`${bgStyles} ${textStyle}`"
		:to="link"
	>
		<template v-if="props.isLoading">
			<span>Loading...</span>
		</template>
		<template v-else>
			<slot>Press Enter</slot>
		</template>
	</component>
</template>
