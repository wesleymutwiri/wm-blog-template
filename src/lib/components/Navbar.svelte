<script>
	import ThemeSwitch from '$lib/stores/ThemeSwitch.svelte';
	let y;
</script>

<svelte:window bind:scrollY={y} />

<nav class:scrolled={y !== 0} class="navbar">
	<div class="title">
		<a href="/"> WM </a>
	</div>
	<div class="navbar-links">
		<div class="navbar-link">
			<a href="/about"> About </a>
		</div>
		<div class="navbar-link">
			<a href="/blog"> Blog </a>
		</div>
		<div class="navbar-link">
			<a href="/category"> Category </a>
		</div>
		<div class="navbar-link">
			<a href="/tag"> Tag </a>
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
		z-index: 1;
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
		padding-right: 2rem;
	}

	.navbar-link {
		margin: 0 1.5rem;
		position: relative;
	}

	.navbar-link a {
		color: inherit;
		text-decoration: none;
		font-family: 'Space Grotesk', sans-serif;
	}

	.navbar-link::after {
		content: '';
		position: absolute;
		width: calc(100% + 20px);
		height: 2px;
		background: var(--color-text);
		bottom: -10px;
		left: 0;
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 0.5s ease-in-out;
	}
	.navbar-link:hover::after {
		transform: scaleX(1);
		transform-origin: left;
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
	@media (max-width: 500px) {
		.navbar-links {
			padding-right: 0;
		}
		.navbar-link {
			margin: 0 1rem;
		}
		.navbar {
			padding: 1.5rem 1rem;
		}
	}
</style>
