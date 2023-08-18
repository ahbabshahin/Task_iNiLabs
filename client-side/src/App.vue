<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<header>
		<div class="wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/index">Index</RouterLink>
			</nav>
		</div>
	</header>

	<RouterView />
</template>
