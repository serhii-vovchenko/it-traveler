<script setup>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue';
import { mapSettings } from './map/settings';
import MarkerIcon from './components/icons/MarkerIcon.vue';
import { ref } from 'vue';
// import { ref } from 'vue';
// import LoginForm from './components/Auth/LoginForm/LoginForm.vue';
// import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue';
// import HomePage from './views/HomePage.vue';
// import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue';
// const modalIsOpen = ref(true);
// const toggleModal = () => {
// 	modalIsOpen.value = !modalIsOpen.value;
// };

const favoritePlaces = [
	{
		id: 1,
		title: 'Палац Спорту',
		description:
			'Ки́ївський пала́ц спо́рту (КПС) — найбільша крита спортивно-видовищна споруда України, розташована у центральній частині міста Київ, біля підніжжя Черепанової гори.',
		img: '',
		lngLat: [30.5084533, 50.4408239],
	},
	{
		id: 2,
		title: 'ТЦ Олімпійський',
		description:
			'TK "Олімпійський" - унікальний сучасний Торговий комплекс, що задає стиль та динаміку життя XXI століття. Комплекс розташований у самому центрі ділового та торгового життя столиці з інтенсивним потоком людей та транспорту.',
		img: '',
		lngLat: [30.5168687, 50.4312893],
	},
	{
		id: 3,
		title: 'Золоті Ворота',
		description:
			"Одна з найдавніших споруд і один з символів міста. Довгий час вони слугували для парадного, церемоніального в'їзду в столицю князів, королів та гетьманів.",
		img: '',
		lngLat: [30.5133569, 50.4467766],
	},
	{
		id: 4,
		title: 'Пункт незламності',
		description:
			'Проєкт української влади, який ініціювали у листопаді 2022 року на фоні масованих обстрілів критичної інфраструктури з боку Росії під час російсько-української війни.',
		img: '',
		lngLat: [30.5220099, 50.4470321],
	},
];

const activeId = ref(null);
const map = ref(null);

const changeActiveId = id => {
	activeId.value = id;
};

const changeActivePlace = id => {
	const { lngLat } = favoritePlaces.find(place => place.id === id);
	changeActiveId(id);
	map.value.flyTo({ center: lngLat, zoom: 12, speed: 0.5 });
};
</script>

<template>
	<main class="flex h-screen">
		<!-- <HomePage /> -->
		<!-- <RegistrationForm @submit="console.log" /> -->
		<!-- <LoginForm @submit="console.log" /> -->
		<!-- <CreateNewPlaceModal :modalIsOpen="modalIsOpen" @close="toggleModal" @submit="console.log" /> -->
		<div class="bg-white h-full max-w-[399px] shrink-0 overflow-auto pb-10">
			<FavoritePlaces
				:items="favoritePlaces"
				:activeId="activeId"
				@place-clicked="changeActivePlace"
			/>
		</div>

		<MapboxMap
			class="w-full h-full"
			:access-token="mapSettings.apiToken"
			:map-style="mapSettings.style"
			:center="[30.523333, 50.450001]"
			:zoom="10"
			@mb-created="mapInstance => (map = mapInstance)"
		>
			<MapboxMarker v-for="place in favoritePlaces" :key="place.id" :lngLat="place.lngLat">
				<button @click="changeActiveId(place.id)">
					<MarkerIcon class="h-8 w-8" />
				</button>
			</MapboxMarker>
		</MapboxMap>
	</main>
</template>
