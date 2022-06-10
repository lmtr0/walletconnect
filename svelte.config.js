import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
        vite: {
            optimizeDeps: {
                // exclude: ['@walletconnect/client']
            },
            define: {
                global: {},
                process: {
                    version: '1',
                    env: ''
                }
            }
        },
		adapter: adapter(),
	},
};

export default config;
