module.exports = {
  title: 'রান্না প্রক্রিয়া',
  description: 'পুষ্টি মান বজায় রেখে খাবার রান্নার প্রক্রিয়া ',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    footer: {
      contact: [
        {
          type: 'facebook',
          link: 'https://www.facebook.com/nutrition.ayesha',
        }
      ],
      copyright: [
        {
          text: 'Copyright © 2020-present ProKria',
          link: '',
        },
      ],
    },
  },
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" }]
  ]
}
