import { router } from '@/router';
import { clientFetch } from '../clientFetch';

export const TOKEN_KEY = 'authToken';

class AuthService {
	#token = null;

	isLoggedIn() {
		return Boolean(this.#token);
	}

	getToken() {
		return this.#token;
	}

	setToken(token) {
		localStorage.setItem(TOKEN_KEY, token);
		// clientFetch.defaults.headers.common = { Authorization: `Bearer ${token}` };
		this.#token = token;
	}

	clearToken() {
		this.#token = null;
		localStorage.removeItem(TOKEN_KEY);
		clientFetch.defaults.headers.common = {};
	}

	async loginUser(body) {
		const { data } = await clientFetch.post('/user/login', body);
		const { accessToken } = data;

		this.setToken(accessToken);
	}
	async registerUser(body) {
		const { data } = await clientFetch.post('/user/register', body);
		const { accessToken } = data;

		this.setToken(accessToken);
	}

	async logoutUser() {
		await clientFetch.get('/user/logout');

		this.clearToken();
	}

	async currentUser() {
		await clientFetch.get('/user/me');
	}

	async refreshUser() {
		const { data } = await clientFetch.post('/user/refresh');
		const { accessToken } = data;

		this.setToken(accessToken);
	}
}

export const authService = new AuthService();

clientFetch.interceptors.request.use(request => {
	const token = authService.getToken();

	if (token) {
		request.headers = { ...request.headers, Authorization: `Bearer ${token}` };
	}

	return request;
});

clientFetch.interceptors.response.use(
	response => response,
	async error => {
		const errorCode = error.response.statusCode;

		if (errorCode === 401) {
			try {
				return await authService.refreshUser();
			} catch (err) {
				router.push('/auth/login');
				return Promise.reject(err);
			}
		}

		return Promise.reject(error);
	}
);
