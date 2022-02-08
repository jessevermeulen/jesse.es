<script>
	export let name;
	export let slug;
</script>

<a
	href={!slug.includes('@') ? 'https://' + slug : 'mailto:' + slug}
	target="_blank"
	class="group relative -mx-4 grid grid-flow-col justify-between px-4 py-2 transition after:absolute after:h-full after:w-full after:mix-blend-overlay after:ring-2 after:ring-inset after:ring-transparent hover:bg-gradient-to-t hover:from-[#2837D6] hover:to-[#364AFF] hover:after:ring-white focus:bg-gradient-to-t focus:from-[#2837D6] focus:to-[#364AFF] focus:outline-none focus:after:ring-white sm:rounded-lg sm:after:rounded-lg sm:hover:scale-[1.01] sm:focus:scale-[1.01]"
>
	<p class="text-xl font-semibold transition-colors group-hover:text-white group-focus:text-white">
		{name}
	</p>
	<div class="grid grid-flow-col items-center gap-3 overflow-hidden">
		<p
			class="min-w-[5rem] text-base text-zinc-500 transition-colors group-hover:text-white group-focus:text-white"
		>
			{slug}
		</p>
		<span
			class="text-xl font-semibold transition-colors group-hover:text-white group-focus:text-white"
		>
			->
		</span>
	</div>
</a>
