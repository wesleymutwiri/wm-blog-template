<script>
	import BlogCard from '$lib/components/BlogCard.svelte';
	import Masonry from '$lib/components/Masonry.svelte';

	let blogs = [
		{
			image: 'https://source.unsplash.com/random/300x200',
			title: 'Investing In CryptoCurrencies Quickstart',
			content: 'Some weird descriptions here that shows small small description',
			slug: 'Blog'
		},
		{
			image: 'https://source.unsplash.com/random/2',
			title: 'Investing In CryptoCurrencies Quickstart',
			content: 'Some weird descriptions here that shows small small description',
			slug: 'Blog'
		},
		{
			image: 'https://source.unsplash.com/random/300x200?sig=4',
			title: 'Investing In CryptoCurrencies Quickstart',
			content: 'Some weird descriptions here that shows small small description',
			slug: 'Blog'
		},
		{
			image: 'https://source.unsplash.com/random/3',
			title: 'Investing In CryptoCurrencies Quickstart',
			content: 'Some weird descriptions here that shows small small description',
			slug: 'Blog'
		},
		{
			image: 'https://source.unsplash.com/random/300x200?sig=10',
			title: 'Investing In CryptoCurrencies Quickstart',
			content: 'Some weird descriptions here that shows small small description',
			slug: 'Blog'
		},
		{
			image: 'https://source.unsplash.com/random/5',
			title: 'Investing In CryptoCurrencies Quickstart',
			content: 'Some weird descriptions here that shows small small description',
			slug: 'Blog'
		}
	];

	// if (blogs.length && )
</script>

<svelte:head>
	<title>WM blog</title>
</svelte:head>

<div class="row blogs">
	<div class="column">
		<div class="recent-blog-image">
			<img src="https://source.unsplash.com/random/" alt="" />
			<h1>Create Beautiful Charts with Svelte And Chart JS</h1>
			<p class="hidden">Some Weird title case description here, for small small things</p>
		</div>
	</div>
	<!-- <div class="column other-blogs"> -->
	<Masonry items={blogs} gridGap="2rem">
		{#each blogs as blogData}
			<BlogCard
				imageURL={blogData.image}
				title={blogData.title}
				description={blogData.content}
				slugField={blogData.slug}
			/>
		{/each}
	</Masonry>
</div>

<!-- </div> -->
<style>
	.hidden {
		display: none;
	}
	.recent-blog-image {
		margin-right: 1rem;
	}
	.recent-blog-image img {
		position: fixed;
		top: 0;
		z-index: -1;
		width: 49%;
		height: 100%;
		bottom: auto;
	}

	.recent-blog-image::after {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 50%;
		z-index: -1;
		background: linear-gradient(to bottom, transparent 0%, var(--color-background) 100%);
	}
	.recent-blog-image h1 {
		width: 500px;
		font-size: 3rem;
		position: fixed;
		bottom: 4rem;
		margin-left: 4rem;
	}

	@media (max-width: 1200px) {
		.recent-blog-image {
			position: relative;
			padding: 2rem;
		}

		.recent-blog-image::after {
			position: absolute;
			width: 100%;
		}
		.recent-blog-image img {
			width: 100%;
			position: initial;
		}
		.recent-blog-image h1 {
			font-size: 2rem;
			margin-left: 0;
			width: max-content;
			position: initial;
		}

		.row {
			display: flex;
			flex-direction: column;
		}
		.column {
			width: 100%;
		}

		.hidden {
			display: initial;
		}
	}

	@media (max-width: 850px) {
		.recent-blog-image {
			margin-right: 0;
		}
		.recent-blog-image h1 {
			/* font-size: 1.5rem; */
			width: auto;
		}
	}

	@media (max-width: 700px) {
		.recent-blog-image h1 {
			font-size: initial;
		}
	}
	@media (max-width: 500px) {
		.recent-blog-image h1,
		.recent-blog-image img,
		.recent-blog-image p {
			padding: 0;
		}
		/* .recent-blog-image h1 {
		} */
	}
</style>
