<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<h1 class="text-2xl">{data.frontmatter.title}</h1>

<article>
	<h2>{data.frontmatter.title}</h2>
	<svelte:component this={component} />
</article>
