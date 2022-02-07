<script>
	import ThemeSwitch from '$lib/stores/ThemeSwitch.svelte';
	let y;
</script>

<svelte:window bind:scrollY={y} />

<nav class:scrolled={y !== 0} class="navbar">
	<div class="title">WM</div>
	<div class="navbar-links">
		<div class="navbar-link">
			<a href="#"> About </a>
		</div>
		<div class="navbar-link">
			<a href="#"> Blog </a>
		</div>
		<div class="navbar-link">
			<a href="#"> Category </a>
		</div>
		<div class="navbar-link">
			<a href="#"> Tag </a>
		</div>
		<div class="theme-changer">
			<ThemeSwitch />
		</div>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		width: 100%;
		top: 0;
	}
	.title {
		background: var(--color-background);
		font-size: 1.2rem;
		font-weight: bold;
		padding: 0.5rem;
	}
	.navbar {
		display: flex;
		justify-content: space-between;
		padding: 1.5rem;
		align-items: center;
		font-size: 0.8rem;
	}

	.navbar-links {
		display: flex;
		align-items: center;
	}

	.navbar-link {
		margin: 0 1.5rem;
	}

	.navbar-link a {
		color: inherit;
		text-decoration: none;
		font-family: 'Space Grotesk', sans-serif;
	}
	.scrolled {
		background: var(--color-background);
		-webkit-box-shadow: 0px 10px 30px -4px var(--color-text);
		-moz-box-shadow: 0px 10px 30px -4px var(--color-text);
		box-shadow: 0px 10px 30px -4px var(--color-text);
	}
	.scrolled .title {
		padding: 0;
	}
</style>
