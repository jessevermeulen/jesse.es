<script>
	export let name;
	export let slug;
</script>

<a
	href={!slug.includes('@') ? 'https://' + slug : 'mailto:' + slug}
	target="_blank"
	class="group grid grid-flow-col justify-between relative -mx-4 px-4 py-2 sm:rounded-lg hover:bg-gradient-to-t hover:from-[#2837D6] hover:to-[#364AFF] sm:hover:scale-[1.01] focus:outline-none focus:bg-gradient-to-t focus:from-[#2837D6] focus:to-[#364AFF] sm:focus:scale-[1.01] after:absolute after:w-full after:h-full  after:ring-2 after:ring-transparent after:ring-inset sm:after:rounded-lg  after:mix-blend-overlay hover:after:ring-white focus:after:ring-white transition"
>
	<p class="text-xl font-semibold group-hover:text-white group-focus:text-white transition-colors">
		{name}
	</p>
	<div class="grid grid-flow-col gap-3 items-center overflow-hidden">
		<p
			class="min-w-[5rem] text-base text-zinc-500 group-hover:text-white group-focus:text-white transition-colors"
		>
			{slug}
		</p>
		<span
			class="text-xl font-semibold group-hover:text-white group-focus:text-white transition-colors"
		>
			->
		</span>
	</div>
</a>
