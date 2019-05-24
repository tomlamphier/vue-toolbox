# Routing
Routing is a way to navigate to different parts of an application.

The standard Vue app is a single page application (SPA).  There is one main page which will have some fixed portions, such as a header and footer components.  The body section will be a special tag, \<router-view\>.  This is where components are displayed by the router.  The router uses a map called **routes** to assign the proper component given a URI path.  

The big advantages of single page applications are simplicity and the fact that your browser can switch between components with the router without doing a page reload.  

There are two parts to setting up routing for an app:
1. Install and configure vue-router.
2. Add a navbar to App.vue, the home page.