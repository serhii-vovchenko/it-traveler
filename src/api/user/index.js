import { clientFetch } from '../clientFetch';

export const loginUser = body => {
	return clientFetch.post('/user/login', body);
};

export const registerUser = body => {
	return clientFetch.post('/user/register', body);
};

export const logoutUser = () => {
	return clientFetch.get('/user/logout');
};

export const currentUser = () => {
	return clientFetch.get('/user/me');
};

export const refreshUser = () => {
	return clientFetch.post('/user/refresh');
};
