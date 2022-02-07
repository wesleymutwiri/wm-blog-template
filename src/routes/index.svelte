<div class="row blogs">
	<div class="column">
		<div class="recent-blog-image">
			<img src="https://source.unsplash.com/random/" alt="" />
			<h1>Create Beautiful Charts with Svelte And Chart JS</h1>
		</div>
	</div>
	<div class="column other-blogs">
		<div class="blog-card">
			<img src="https://source.unsplash.com/random/300x200" alt="" />
			<h4>Investing In CryptoCurrencies Quickstart</h4>
			<p>Some weird descriptions here that shows small small description</p>
		</div>
		<div class="blog-card">
			<img src="https://source.unsplash.com/random/3" alt="" />
			<h4>Investing In CryptoCurrencies Quickstart</h4>
			<p>Some weird descriptions here that shows small small description</p>
		</div>
		<div class="blog-card">
			<img src="https://source.unsplash.com/random/300x200?sig=3" alt="" />
			<h4>Investing In CryptoCurrencies Quickstart</h4>
			<p>Some weird descriptions here that shows small small description</p>
		</div>
		<div class="blog-card">
			<img src="https://source.unsplash.com/random/5" alt="" />
			<h4>Investing In CryptoCurrencies Quickstart</h4>
			<p>Some weird descriptions here that shows small small description</p>
		</div>
		<div class="blog-card">
			<img src="https://source.unsplash.com/random/6" alt="" />
			<h4>Investing In CryptoCurrencies Quickstart</h4>
			<p>Some weird descriptions here that shows small small description</p>
		</div>
	</div>
</div>

<style>
	.blogs {
		/* max-height: 100vh; */
		/* height: 100vh; */
		overflow-y: hidden;
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

	.other-blogs {
		width: 50%;
		/* display: grid; */
		/* grid-template-columns: repeat(2, 1fr); 
		grid-template-rows: repeat(auto-fit, minmax(30%, 1fr));
		grid-template-rows: masonry;
		grid-template-columns: masonry; */
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem 0.5rem;
		/* grid-auto-flow: dense; */

		/* gap: 10px; */
	}

	.blog-card {
		width: 100%;
		border-radius: 3rem;
		height: max-content;
	}
	.blog-card h4 {
		font-size: 1rem;
	}
	.blog-card img {
		width: 90%;
		height: min-content;
		object-fit: cover;
	}

	@supports (grid-template-rows: masonry) {
		.other-blogs {
			width: 50%;
			display: grid;
			grid-template-rows: masonry;
		}
	}
</style>
