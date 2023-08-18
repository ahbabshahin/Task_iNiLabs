<script setup>
import useCruds from '../../composables/crud';
import { onMounted } from 'vue';

const { cruds, getCruds, destroyCrud } = useCruds();
onMounted(() => getCruds());
</script>

<template>
	<div class="mt-12">
		<div class="flex justify-center m-2 p-2">
			<RouterLink
				:to="{ name: 'Create' }"
				class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded"
				>New</RouterLink
			>
		</div>
		<div class="relative overflow-x-auto">
			<!-- max-w-md mx-auto p-4 bg-white shadow-md rounded-md -->
			<table
				class="max-w-md mx-auto text-sm text-left text-gray-500 dark:text-gray-400 shadow-md rounded-md"
			>
				<thead
					class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
				>
					<tr>
						<th scope="col" class="px-6 py-3">Title</th>
						<th scope="col" class="px-6 py-3">Description</th>
						<th scope="col" class="px-6 py-3">Attachment</th>
						<th scope="col" class="px-6 py-3">Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="crud in cruds"
						:key="crud.id"
						class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
					>
						<td class="px-6 py-4">{{ crud.title }}</td>
						<td class="px-6 py-4">{{ crud.desc }}</td>
						<td class="px-6 py-4">{{ crud.attachment }}</td>
						<td class="px-6 py-4 space-x-2">
							<RouterLink
								:to="{
									name: 'Edit',
									params: { id: crud.id },
								}"
								class="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded"
								>Edit</RouterLink
							>

							<button
								@click="destroyCrud(crud.id)"
								class="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
							>
								Delete
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
