import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@pages': path.resolve(process.cwd(), './src/pages'),
			'@components': path.resolve(process.cwd(), './src/components'),
			'@providers': path.resolve(process.cwd(), './src/providers'),
			'@assets': path.resolve(process.cwd(), './src/assets'),
			'@hooks': path.resolve(process.cwd(), './src/hooks'),
			'@utils': path.resolve(process.cwd(), './src/utils'),
			'@store': path.resolve(process.cwd(), './src/store'),
			'@layouts': path.resolve(process.cwd(), './src/layouts'),
		},
	},
});
