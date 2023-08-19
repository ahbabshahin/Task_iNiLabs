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
			path: '/cruds',
			name: 'Index',
			component: () => import('../views/Index.vue'),
		},
		{
			path: '/cruds/create',
			name: 'Create',
			component: () => import('../views/Create.vue'),
		},
		{
			path: '/cruds/:id/edit',
			name: 'Edit',
			component: () => import('../views/Edit.vue'),
		},
	],
});

export default router;
