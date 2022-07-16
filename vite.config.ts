import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'//在这用这个辅助插件不用每个页面都去引入vue的那些方法
// 实现 组件的按需加载
// 当引入 "unplugin-vue-components/vite 组件之后，页面中需要引入组件的地方就都不需要引入了
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 引入对应 UI库的 resolver，则对应UI组件库的组件也不需要单独引入了

import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: "dist",
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'], // 需要自动引入api的库
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      dts: resolve(__dirname, 'src/auto-import.d.ts'),
      //可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts' ,注意:这里配置之后会在启动之后多次编译，具体原因无法找到，可以选择注释掉，不影响使用
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
      ]
    }),

  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@/styles/element/index.scss" as *;`,
  //     },
  //   },
  // },
})
