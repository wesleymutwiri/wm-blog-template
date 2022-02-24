<script context="module">
	export async function load({ fetch }) {
		const url = `/blog.json`;
		const res = await fetch(url);

		if (res.ok) {
			const blogs = await res.json();
			return { props: { blogs } };
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import { browser } from '$app/env';
	import { page } from '$app/stores';

	export let blogs;

	const tagSet = new Set();
	blogs.forEach((blog) => {
		blog.tags.forEach((tag) => tagSet.add(tag));
	});
	const tags = [...tagSet].sort();

	let tag;

	$: blogsFilteredByTag = tagSet.has(tag) ? blogs.filter((p) => p.tags.includes(tag)) : blogs;

	let unsub;

	if (browser) {
		unsub = page.subscribe(({ url }) => {
			tag = url.searchParams.get('tag');
			// console.log({ tag })
		});
	}

	if (browser) {
		unsub = page.subscribe(({ url }) => {
			tag = url.searchParams.get('tag');
			// console.log({ tag })
		});
	}

	onDestroy(() => {
		unsub && unsub();
	});
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent Blogs</h1>
{#each tags as tag}
	<a href="/?tag={tag}">#{tag} </a>
{/each}
<ol>
	{#each blogsFilteredByTag as blog}
		<li>
			<a href="/blog/{blog.title.replaceAll(' ', '_').toLowerCase()}"> {blog.title} </a>

			<p>{blog.description}</p>

			<div class="tags">
				{#each blog.tags as tag}
					<a href="/?tag={tag}"> #{tag} </a>
				{/each}
			</div>
		</li>
	{/each}
</ol>
