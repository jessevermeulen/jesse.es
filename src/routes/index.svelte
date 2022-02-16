<script>
	import Logo from '$lib/components/Logo.svelte';
	import Redirects from '$lib/content/redirects.svelte.md';
</script>

<div class="m-auto my-16 grid gap-8 px-4 sm:my-32 sm:max-w-md sm:px-0">
	<header class="grid gap-6">
		<Logo />

		<div class="grid gap-3 pt-6">
			<h1 class="text-xl font-semibold">Jesse Vermeulen</h1>
			<p class="text-lg">
				Amsterdam based digital product designer with over 8 years of experience in both design and
				development.
			</p>
		</div>
	</header>
	<main>
		<Redirects />
	</main>
</div>
