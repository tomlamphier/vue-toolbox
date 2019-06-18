module.exports = {
  base: "/vue-toolbox/",
  title: 'Vue Toolbox',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Components', 
        items: [
          {text: "Basics", link: '/components/' },
          {text: "Template 1", link: '/components/template1'},
          {text: "Template 2", link: '/components/template2'},
          {text: "Template 3", link: '/components/template3'},
          {text: "Template 4", link: '/components/template4'},
          {text: "Template 5", link: '/components/template5'},
          {text: "Script 1", link: '/components/script1'},
          {text: "Script 2", link: '/components/script2'},
          {text: "Script 3", link: '/components/script3'},
          {text: "Nesting Components", link: '/components/nesting'}
        ]
      },
      {text: 'Routing', 
        items: [
          {text: "Routing", link: '/routing/routing1.md'},
          {text: "Install and Configure Router", link: '/routing/routing2.md'},
          {text: "Navbar", link: '/routing/routing3.md'}
        ]
      },
      {text: 'Vuex', link: '/vuex/'},
      {text: 'Tasks', 
        items: [
          {text: "Jsfiddle", link: '/tasks/jsfiddle' },
          {text: "Bootstrap", link: '/tasks/bootstrap'},
          {text: "Placeholder", link: '/tasks/placeholder'},
        ]
      },
      {text: "Packages",
        items: [
          {text: "Axios for HTTP", link: '/packages/axios'},
          {text: "Datatables", link: '/packages/datatables'}
        ]
      }
    ],
    sidebar: {
      '/components/': [
        '',
        'template1',
        'template2',
        'template3',
        'template4',
        'template5',
        'script1',
        'script2',
        'script3',
        'nesting'
      ],
      '/routing/': [
        'routing1',
        'routing2',
        'routing3'
      ],
      '/vuex/': [
        ''   
      ],
      '/packages/': [
        'axios'
      ],
      '/': [
        '',
        'refs',
        'status'
      ]
    }
  }
}
