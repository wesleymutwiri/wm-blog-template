<div class="row blogs">
	<div class="column">
		<div class="recent-blog-image">
			<img src="https://source.unsplash.com/random/" alt="" />
			<h1>Create Beautiful Charts with Svelte And Chart JS</h1>
		</div>
	</div>
	<div class="column other-blogs">
		<div class="blog-card">
			<img src="https://source.unsplash.com/random/2" alt="" />
			<h4>Investing In CryptoCurrencies Quickstart</h4>
			<p>Some weird descriptions here that shows small small description</p>
		</div>
		<div class="blog-card">
			<img src="https://source.unsplash.com/random/3" alt="" />
			<h4>Investing In CryptoCurrencies Quickstart</h4>
			<p>Some weird descriptions here that shows small small description</p>
		</div>
		<div class="blog-card">
			<img src="https://source.unsplash.com/random/4" alt="" />
			<h4>Investing In CryptoCurrencies Quickstart</h4>
			<p>Some weird descriptions here that shows small small description</p>
		</div>
		<div class="blog-card">
			<img src="https://source.unsplash.com/random/5" alt="" />
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
	.recent-blog-image img {
		position: fixed;
		top: 0;
		z-index: -1;
		width: 50%;
		height: 100%;
		bottom: auto;
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
		display: grid;
		grid-template-columns: repeat(2, 1fr); 
		grid-template-rows: repeat(auto-fit, minmax(30%, 1fr));
		grid-template-rows: masonry;
		grid-template-columns: masonry;
	}

	.blog-card {
		width: 350px;
		border-radius: 3rem;
		margin: 1rem;
		height: max-content;
	}
	.blog-card h4 {
		font-size: 1rem;
	}
	.blog-card img {
		width: 100%;
		height: min-content;
	}
</style>
