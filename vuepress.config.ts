import { defaultTheme, defineUserConfig } from 'vuepress';


export default defineUserConfig({
    lang: 'zh-CN',
    title: 'ESP32 开发笔记 - 小土坡',
    description: '这是我的私人 ESP32 笔记站点。',
    base: '/esp32/',
    head: [
        ['link', {rel: 'icon', href: '/images/xiaotupo-logo.svg'}]
    ],
    theme: defaultTheme({
        logo: '/images/xiaotupo-logo.svg',
        colorMode: 'light',
        home: '/',

        sidebar: {
            '/guide/': [
                {
                    text: '指南',
                    children: ['/guide/README.md', '/guide/我的ESP32开发板.md']
                }
            ]
        },

        navbar: [
            {
                text: '指南',
                link: '/guide/'
            },
            {
                text: 'ESP32官网',
                link: 'https://docs.espressif.com/projects/esp-idf/zh_CN/latest/esp32/'
            }
        ]
    })
})