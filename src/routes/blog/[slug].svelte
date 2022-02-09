<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`./_posts/${params.slug}.md`);
		if (res.status === 200) {
			return { postMd: await res.text() };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import fm from 'front-matter';
	import marked from 'marked';
	export let postMd;
	const renderer = new marked.Renderer();
	$: frontMatter = fm(postMd);
	$: post = {
		...frontMatter.attributes,
		html: marked(frontMatter.body, { renderer })
	};
	// console.log(post);
</script>

<svelte:head>
	<title>something</title>
</svelte:head>

<div class="content">{@html post.html}</div>
