import {defineConfig,transformerDirectives} from 'unocss'

export default defineConfig({
    presets:[],
    transformers: [
        transformerDirectives(),
    ]
})
