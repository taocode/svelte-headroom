import adapter from '@sveltejs/adapter-auto'
import { mdsvex } from 'mdsvex'
import headings from '@vcarl/remark-headings'
import headingids from 'remark-heading-id'

export const remarkPlugins = [headingids, headings]
const extensions = ['.md','.svelte']

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions,
	preprocess: [mdsvex({extensions, remarkPlugins})],
	kit: {
		adapter: adapter()
	}
};

export default config
