import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Onebot-11-Docs",
  cleanUrls: true,
  metaChunk: true,
  description: 'Onebot-11-Docs',
  themeConfig: {
    sidebar: [
	  {
        text: '介绍',
		collapsed: false,
        items: [
          { text: '介绍', link: '/' },
        ]
      },
      {
        text: '通信',
		collapsed: false,
        items: [
          { text: '通信概述', link: '/communication/' },
		  { text: 'HTTP', link: '/communication/http' },
		  { text: 'HTTP POST', link: '/communication/http-post' },
		  { text: '正向 WebSocket', link: '/communication/ws' },
		  { text: '反向 WebSocket', link: '/communication/ws-reverse' },
          { text: '鉴权', link: '/communication/authorization' }
        ]
      },
	  {
        text: '消息',
		collapsed: false,
        items: [
          { text: '消息概述', link: '/message/' },
		  { text: '字符串格式', link: '/message/string' },
		  { text: '数组格式', link: '/message/array' },
		  { text: '消息段类型', link: '/message/segment' }
        ]
      },
	  {
        text: 'API',
		collapsed: false,
        items: [
          { text: 'API 概述', link: '/api/' },
		  { text: '公开 API', link: '/api/public' },
		  { text: '隐藏 API', link: '/api/hidden' }
        ]
      },
	  {
        text: '事件',
		collapsed: false,
        items: [
          { text: '事件概述', link: '/event/' },
		  { text: '消息事件', link: '/event/message' },
		  { text: '通知事件', link: '/event/notice' },
		  { text: '请求事件', link: '/event/request' },
		  { text: '元事件', link: '/event/meta' }
        ]
      },
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
  /*
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
  */
})
