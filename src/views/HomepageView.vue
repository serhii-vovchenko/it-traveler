<script setup>
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
import { onMounted, ref } from 'vue';

import FavoritePlaces from '../components/FavoritePlaces/FavoritePlaces.vue';
import MarkerIcon from '../components/icons/MarkerIcon.vue';
import CreateNewPlaceModal from '../components/CreateNewPlaceModal/CreateNewPlaceModal.vue';
import { mapSettings } from '../map/settings';
import { addNewFavoritePlace, getAllFavoritePlaces } from '@/api/favorite-places';
import { useModal } from '@/composables/useModal';
import { useMutation } from '@/composables/useMutation';
import UserInfo from '@/components/UserInfo/UserInfo.vue';
import LogoutButton from '@/components/LogoutButton/LogoutButton.vue';

const { modalIsOpen, openModal, closeModal } = useModal();

const favoritePlaces = ref([]);
const activeId = ref(null);
const map = ref(null);
const mapMarkerLngLat = ref(null);

const {
	mutation: addPlace,
	isLoading: addingPlace,
	error,
} = useMutation({
	mutationFn: newPlaceData => addNewFavoritePlace(newPlaceData),
	onSuccess: () => {
		closeModal();
		mapMarkerLngLat.value = null;
	},
});

const changeActiveId = id => {
	activeId.value = id;
};

const changeActivePlace = id => {
	const { coordinates } = favoritePlaces.value.find(place => place.id === id);
	changeActiveId(id);
	map.value.flyTo({ center: coordinates, zoom: 12, speed: 0.5 });
};

const handleMapClick = ({ lngLat }) => {
	mapMarkerLngLat.value = [lngLat.lng, lngLat.lat];
};

const handleAddPlace = async (formData, resetForm) => {
	const body = {
		...formData,
		coordinates: mapMarkerLngLat.value,
	};
	await addPlace(body);
	getPlaces();
	resetForm();
};

const getPlaces = async () => {
	const data = await getAllFavoritePlaces();
	favoritePlaces.value = data;
};

onMounted(async () => {
	getPlaces();
});
</script>

<template>
	<main class="flex h-screen">
		<div class="relative bg-white h-full w-[399px] shrink-0 overflow-auto pb-10">
			<UserInfo />

			<FavoritePlaces
				:items="favoritePlaces"
				:activeId="activeId"
				@place-clicked="changeActivePlace"
				@create="openModal"
				@updated="getPlaces"
				@del-item="getPlaces"
			/>

			<LogoutButton class="mt-10" />

			<CreateNewPlaceModal
				:modalIsOpen="modalIsOpen"
				@close="closeModal"
				@submit="handleAddPlace"
				:is-loading="addingPlace"
				:has-error="error"
			/>
		</div>

		<MapboxMap
			class="w-full h-full"
			:access-token="mapSettings.apiToken"
			:map-style="mapSettings.style"
			:center="[30.523333, 50.450001]"
			:zoom="10"
			@mb-click="handleMapClick"
			@mb-created="mapInstance => (map = mapInstance)"
		>
			<MapboxMarker v-if="mapMarkerLngLat" :lngLat="mapMarkerLngLat" anchor="bottom">
				<MarkerIcon class="h-8 w-8" is-active />
			</MapboxMarker>

			<MapboxMarker
				v-for="place in favoritePlaces"
				:key="place.id"
				:lngLat="place.coordinates"
				anchor="bottom"
			>
				<button @click.stop="changeActiveId(place.id)">
					<MarkerIcon class="h-8 w-8" />
				</button>
			</MapboxMarker>
		</MapboxMap>
	</main>
</template>
