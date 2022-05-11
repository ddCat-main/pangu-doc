import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  title: '盘古Saas文档',
  description: 'Just playing around',
  theme: 'reco',
  themeConfig: {
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'ddCat',
    dest: './dist',// 设置输出目录
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/docs/': [
        {
          text: '安装&配置',
          children: [
            'synopsis',
            'config',
            'start',
          ]
        },
        {
          text: '学习资源',
          children: [
            'cloud',
          ]
        }
      ]
    },
    navbar:
    [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/synopsis' },
    ],
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  },
  // debug: true,
})
