<script context="module">
	import { base } from '$app/paths';
	export async function load({ page, fetch }) {
		const slug = page.params.slug;
		const post = await fetch(`${base}/blog/${slug}.json`).then((r) => r.json());
		return {
			props: { post }
		};
	}
</script>

<script>
	export let post;
</script>

<div class="container">
	<article class="content">
		<h1>{post.title}</h1>
		{@html post.html}
	</article>
</div>
