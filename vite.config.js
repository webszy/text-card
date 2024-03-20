import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import {VueRouterAutoImports} from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import px2rem from 'postcss-plugin-px2rem'
import autoprefixer from 'autoprefixer'
import VueMacros from 'unplugin-vue-macros/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        AutoImport({
            dts: true,
            imports: [
                'vue',
                'pinia',
                VueRouterAutoImports,
                {
                'naive-ui': [
                    'useDialog',
                    'useMessage',
                    'useNotification',
                    'useLoadingBar'
                ]}
            ],
            dirs:['src/stores']
        }),
        VueRouter(),
        vue(),
        Components({
            resolvers: [NaiveUiResolver()]
        }),
        UnoCSS(),
        VueMacros({
            reactivityTransform:true,
            definePropsRefs:true
        })
    ],
    css:{
        postcss:{
            plugins: [px2rem({rootValue: 37.5, unitPrecision: 5, propList: ['*']}),autoprefixer()]
        }
    },
    server:{
        host:'0.0.0.0',
    }

})
