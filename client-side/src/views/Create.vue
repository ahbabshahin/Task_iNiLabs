<script setup>
import { reactive } from 'vue';
import useCruds from '../assets/composables/crud';

const { storeCrud, errors } = useCruds();

const form = reactive({
	title: '',
	desc: '',
});
</script>

<template>
	<div class="mt-12">
		<form
			@submit.prevent="storeCrud(form)"
			class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
		>
			<div class="space-y-6">
				<div class="mb-6">
					<label
						for="title"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Title</label
					>
					<input
						type="text"
						id="title"
						v-model="form.title"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>

				<div v-if="errors.title">
					<span class="text-sm text-red-400">{{
						errors.title[0]
					}}</span>
				</div>

				<div class="mb-6">
					<label
						for="desc"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Description</label
					>
					<input
						type="text"
						id="desc"
						v-model="form.desc"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<div v-if="errors.desc">
					<span class="text-sm text-red-400">{{
						errors.desc[0]
					}}</span>
				</div>

				<!-- <div class="mb-6">
					<label
						for="attachment"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Attachment</label
					>
					<input
						type="file"
						id="attachment"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<div v-if="errors.attachment">
					<span class="text-sm text-red-400">{{
						errors.attachment[0]
					}}</span>
				</div> -->

				<div class="mt-4">
					<button
						type="submit"
						class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded"
					>
						Store
					</button>
				</div>
			</div>
		</form>
	</div>
</template>
