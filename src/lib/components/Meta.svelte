<script>
	import { navigating, page } from '$app/stores';

	export let title = 'Jesse Vermeulen - Business Card';
	export let image = 'meta.png';
	export let description =
		'Jesse Vermeulen is an Amsterdam based Digital Product Designer with over 8 years of experience in both design and development.';
</script>

<svelte:head>
	{#key $navigating}
		<title>{title}</title>
		<meta name="title" content={title} />
		<meta name="description" content={description} />

		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://jessevermeulen.com{$page.url.pathname}" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content="https://jessevermeulen.com/{image}" />

		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content="https://jessevermeulen.com{$page.url.pathname}" />
		<meta property="twitter:title" content={title} />
		<meta property="twitter:description" content={description} />
		<meta property="twitter:image" content="https://jessevermeulen.com/{image}" />
	{/key}
</svelte:head>
