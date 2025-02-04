<script setup>
import { computed, ref } from 'vue';
import EditPlaceModal from '../EditPlaceModal/EditPlaceModal.vue';
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue';
import IButton from '../IButton/IButton.vue';
import { useModal } from '@/composables/useModal';
import { useMutation } from '@/composables/useMutation';
import { deleteFavoritePlace, updateFavoritePlace } from '@/api/favorite-places';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal.vue';

const props = defineProps({
	items: {
		required: true,
		type: Array,
	},
	activeId: {
		required: true,
		type: [String, null],
	},
});

const selectedId = ref(null);
const idOfDeletePlace = ref(null);

const emit = defineEmits(['place-clicked', 'create', 'updated', 'del-item']);

const {
	modalIsOpen: isEditModalOpen,
	openModal: openEditModal,
	closeModal: closeEditModal,
} = useModal();

const {
	modalIsOpen: isConfirmationModalOpen,
	openModal: openConfirmationModal,
	closeModal: closeConfirmationModal,
} = useModal();

const { mutation: updatePlace, isLoading } = useMutation({
	mutationFn: formData => updateFavoritePlace(formData),
	onSuccess: () => {
		closeEditModal();
		emit('updated');
	},
});

const {
	mutation: deletePlace,
	isLoading: isDeleteLoading,
	error: deleteError,
} = useMutation({
	mutationFn: id => deleteFavoritePlace(id),
	onSuccess: () => {
		closeConfirmationModal();
		idOfDeletePlace.value = null;
	},
});

const selectedItem = computed(() => props.items.find(item => item.id === selectedId.value));

const handleEditPlace = id => {
	selectedId.value = id;
	openEditModal();
};

const handleSubmit = formData => {
	updatePlace(formData);
};

const handleOpenConfirmationModal = id => {
	idOfDeletePlace.value = id;
	openConfirmationModal();
};

const handleDeletePlace = () => {
	deletePlace(idOfDeletePlace.value);
	emit('del-item');
};
</script>

<template>
	<div class="px-6 min-w-[320px] max-w-[379px]">
		<h3 class="text-gray mb-[18px]">Додані маркери</h3>
		<p v-if="items.length === 0" class="text-gray">Список порожній</p>
		<FavoritePlace
			v-for="place in props.items"
			:key="place.id"
			:title="place.title"
			:description="place.description"
			:img="place.img"
			:isActive="place.id === props.activeId"
			@click="emit('place-clicked', place.id)"
			@edit="handleEditPlace(place.id)"
			@delete="handleOpenConfirmationModal(place.id)"
		/>
		<EditPlaceModal
			:modal-is-open="isEditModalOpen"
			@close="closeEditModal"
			:place="selectedItem"
			@submit="handleSubmit"
			:is-loading="isLoading"
		/>
		<ConfirmationModal
			title="Ви дійсно хочете видалити улюблене місце?"
			:modal-is-open="isConfirmationModalOpen"
			:is-loading="isDeleteLoading"
			:has-error="deleteError"
			@cancel="closeConfirmationModal"
			@confirm="handleDeletePlace"
		/>
		<IButton class="w-full mt-10" variant="gradient" @click="emit('create')">Додати маркер</IButton>
	</div>
</template>
