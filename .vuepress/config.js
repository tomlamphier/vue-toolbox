module.exports = {
  base: "/vue-toolbox/",
  title: 'Vue Toolbox',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Components', link: '/components/'},
      {text: 'Routing', link: '/routing/'}
    ],
    sidebar: {
      '/components/': [
        ''
      ],
      '/routing/': [
        ''
      ],
      '/': [
        '',
        'refs',
        'status'
      ]
    }
  }
}
