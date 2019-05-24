# vue-router
The easiest way to work with vue-router is to select it as an install option when you start a new project with the vue cli.  One thing that will be created is a routes table in /src/router/index.js.  This maps URI paths to components. You have to create routing entries in this table for the components you have.  

Example Routes Table
```
export default new Router({
  mode: 'history',
  routes: [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar},
    {path: '/', component: HelloWorld}
]
```

The full setup is:
1.  Modify routes table in src/router/index.js as required.
    Add mode: 'history', just before routes array to
    avoid hash in address field.
    Add import stmt in above file for each component.
2.  Create Router object.  \<- already done in above file
3.  Vue.use(Router)  \<- already done in above file
4.  Add router to root Vue.  \<- already done in main.js
5.  In App.vue, \<router-view /\>  \<- already done

Note that most of the setup is done automatically by the vue cli.

Now you can select different components to fill the router-view slot by changing the URI in a browser location field.  You can use this to test the routing at this point.
