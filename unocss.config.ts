import {defineConfig,presetIcons} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    presets:[presetIcons({

    })],
    transformers: [
        transformerDirectives(),
    ]
})
