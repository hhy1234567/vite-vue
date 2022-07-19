import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'//在这用这个辅助插件不用每个页面都去引入vue的那些方法
// 实现 组件的按需加载
// 当引入 "unplugin-vue-components/vite 组件之后，页面中需要引入组件的地方就都不需要引入了
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 引入对应 UI库的 resolver，则对应UI组件库的组件也不需要单独引入了

import postcsspxtoviewport from "postcss-px-to-viewport"
//使用mock
import { viteMockServe } from 'vite-plugin-mock'

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
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    viteMockServe({
      supportTs: true,
      logger: false,
      mockPath: "@/mock/"
    }),
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

  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 768, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          landscape: false // 是否处理横屏情况
        })
      ]
    },
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@use "@/styles/element/index.scss" as *;`,
    //     },
    //   },
  },
})
