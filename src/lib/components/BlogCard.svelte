<script>
	export let imageURL, title, description, slugField;
</script>

<div class="blog-card">
	<a href={slugField}>
		<img src={imageURL} alt="" />
	</a>
	<h4>{title}</h4>
	<p>{description}</p>
</div>

<style>
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
</style>
