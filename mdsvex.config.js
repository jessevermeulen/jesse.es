const config = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		redirects: './src/lib/content/layout.svelte'
	},
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
};

export default config;
