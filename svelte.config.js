import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: {
			plugins: [autoprefixer(), cssnano()]
		}
	})
};

export default config;