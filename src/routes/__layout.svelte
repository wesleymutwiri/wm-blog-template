<script lang="ts">
	import { theme } from '$lib/stores/stores';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
	<link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<main class="container">
	<Navbar />
	<article>
		<slot />
	</article>
</main>

<style>
    article {
        margin-top: 4rem;
    }
</style>
