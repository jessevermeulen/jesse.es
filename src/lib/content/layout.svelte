<script>
	export let redirects;
</script>

<ul class="-mx-4 py-3">
	{#each redirects as redirect}
		<li>
			<a
				href={!redirect.slug.includes('@') ? 'https://' + redirect.slug : 'mailto:' + redirect.slug}
				target="_blank"
				class="group grid grid-flow-col justify-between relative px-4 py-2 rounded-lg hover:bg-gradient-to-t hover:from-[#2837D6] hover:to-[#364AFF] hover:scale-[1.01] focus:outline-none focus:bg-gradient-to-t focus:from-[#2837D6] focus:to-[#364AFF] focus:scale-[1.01] after:absolute after:w-full after:h-full after:ring-2 after:ring-inset after:ring-transparent after:mix-blend-overlay after:rounded-lg hover:after:ring-white focus:after:ring-white transition"
			>
				<p
					class="text-xl font-semibold group-hover:text-white group-focus:text-white transition-colors"
				>
					{redirect.name}
				</p>
				<div class="grid grid-flow-col gap-3 items-center overflow-hidden">
					<p
						class="min-w-[5rem] text-base text-zinc-500 group-hover:text-white group-focus:text-white transition-colors"
					>
						{redirect.slug}
					</p>
					<span
						class="text-xl font-semibold group-hover:text-white group-focus:text-white transition-colors"
					>
						->
					</span>
				</div>
			</a>
		</li>
	{/each}
</ul>
