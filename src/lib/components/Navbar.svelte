<script>
	import ThemeSwitch from '$lib/stores/ThemeSwitch.svelte';
</script>

<nav class="navbar">
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
</style>