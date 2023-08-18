import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/index',
			name: 'index',
			component: () => import('../views/Index.vue'),
		},
		{
			path: '/create',
			name: 'Create',
			component: () => import('../views/Create.vue'),
		},
		{
			path: '/:id/edit',
			name: 'edit',
			component: () => import('../views/Edit.vue'),
		},
	],
});

export default router;
