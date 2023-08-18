import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/';

export default function useCruds() {
	const cruds = ref([]);
	const crud = ref([]);
	const errors = ref({});
	const router = useRouter();

	const getCruds = async () => {
		const res = await axios.get('cruds');
		cruds.value = res.data.data;
	};

	const getCrud = async (id) => {
		const res = await axios.get('cruds/' + id);
		crud.value = res.data.data;
	};

	const storeCrud = async (data) => {
		try {
			await axios.post('cruds', data);
			await router.push({ name: 'Index' });
		} catch (error) {
			if (error.response.status === 422) {
				errors.value = error.response.data.errors;
			}
		}
	};

	const updateCrud = async (id) => {
		try {
			await axios.put('cruds/' + id, crud.value);
			await router.push({ name: 'Index' });
		} catch (error) {
			if (error.response.status === 422) {
				errors.value = error.response.data.errors;
			}
		}
	};

	const destroyCrud = async (id) => {
		if (!window.confirm('Are you Sure?')) return;
		await axios.delete('cruds/' + id);
		getCruds();
		await router.push({ name: 'Index' });
	};

	return {
		crud,
		cruds,
		getCruds,
		getCrud,
		storeCrud,
		updateCrud,
		destroyCrud,
		errors,
	};
}
