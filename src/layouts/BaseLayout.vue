<template>
	<main class="flex h-screen">
		<section class="flex-1 flex justify-center items-center bg-primary">
			<div class="text-white w-[499px]">
				<slot></slot>
			</div>
		</section>
		<section class="flex-1">
			<img
				class="h-screen w-full object-cover"
				src="../assets/img/static-map.png"
				alt="map"
				width="700"
			/>
		</section>
	</main>
</template>
