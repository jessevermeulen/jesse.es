<script>
	import Link from '$lib/components/Link.svelte';

	export let redirects;
</script>

<ul>
	{#each redirects as redirect}
		<li>
			<Link {...redirect} />
		</li>
	{/each}
</ul>
