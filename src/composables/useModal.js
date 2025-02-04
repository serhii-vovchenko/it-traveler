import { ref } from 'vue';

export const useModal = () => {
	const modalIsOpen = ref(false);

	const openModal = () => {
		modalIsOpen.value = true;
	};

	const closeModal = () => {
		modalIsOpen.value = false;
	};

	const toggleModal = () => {
		modalIsOpen.value = !modalIsOpen.value;
	};

	return { modalIsOpen, openModal, closeModal, toggleModal };
};
