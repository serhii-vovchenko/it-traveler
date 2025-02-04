import { authService } from '@/api/AuthService';
import { createRouter, createWebHistory } from 'vue-router';

const GreetingPage = () => import('@/views/GreetingView.vue');
const HomePage = () => import('@/views/HomepageView.vue');
const AuthPage = () => import('@/views/AuthView.vue');
const RegisterView = () => import('../views/RegistrationView.vue');
const LoginView = () => import('../views/LoginView.vue');

const routes = [
	{ path: '/', component: GreetingPage, name: 'greeting' },
	{ path: '/map', component: HomePage, name: 'homepage' },
	{
		path: '/auth',
		component: AuthPage,
		redirect: '/auth/login',
		children: [
			{ path: 'login', component: LoginView, name: 'login' },
			{ path: 'registration', component: RegisterView, name: 'registration' },
		],
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const authRoutes = ['login', 'registration'];
	const { name } = to;

	if (authService.isLoggedIn() && authRoutes.includes(name)) {
		next({ name: 'homepage' });
	} else if (!authRoutes.includes(name) && !authService.isLoggedIn()) {
		next({ name: 'login' });
	} else {
		next();
	}
});
