import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

type ViteConfigProps = {
  mode: string;
  command: string;
};

// https://vitejs.dev/config/
export default (args: ViteConfigProps) => {
  const generateScopedName =
    args.mode === 'production' ? '[hash:base64:2]' : '[local]_[hash:base64:2]';

  return defineConfig({
    plugins: [react()],
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    },
  });
};
