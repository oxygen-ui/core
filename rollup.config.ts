import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true,
        },
    ],
    external: ['react', 'react-dom'],
    plugins: [
        external(),
        resolve(),
        postcss(),
        copy({
            targets: [
                { src: 'src/assets/css/fonts.css', dest: 'build' },
                { src: 'src/assets/fonts/*', dest: 'build/fonts' },
            ],
        }),
        typescript({
            rollupCommonJSResolveHack: true,
            exclude: '**/__tests__/**',
            clean: true,
        }),
        commonjs({
            include: ['node_modules/**'],
        }),
    ],
};
