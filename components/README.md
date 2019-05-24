# Component Basics
A **component** is a self-contained, reusable building block for a web application.  A component consists of a template, script, and styling, and occupies a rectangular area of a web page.  One of their important advantages is that they break down a complex application into smaller, easier to maintain parts.  And there are many pre-built components that you can incorporate into your apps. [See Vue Awesome / Components and Libraries.](https://github.com/vuejs/awesome-vue) An app can leverage these resources and also contain custom components that you create yourself. 
## What Can a Component Do?
I think of components as independent objects that cooperate to provide all the features you need in an app.  A component usually presents information onscreen. That information may change, and the component will automatically keep it up-to-date (thru reactivity).  A component can also rspond to user events, such as click, text entry, or mouseover.  Behind the scenes, a component can connect to a back end REST service, such as querying a database.  

Components are nested like HTML, hence you can easily build up structures like sidebars, footers, and so on.  And a set of Vue directives enables you to iterate a component, show/hide it, feed it params. 
## Ways of Creating a Component
You can create a component on the fly if you are working in an interactive environment like jsfiddle.  This is done with Vue.component(name, code-for-it).  But in project, you would create a .vue file under src/components.  A .vue file is structured into three parts:
1. **template** - HTML, data references, properties, and directives
2. **script** - structured javascript, consisting of:
    * imports    - other components
    * name       - this component
    * components - list of other components used by this one
    * data       - data owned by this component
    * props      - incoming parameters. These are reactive.
    * computed   - fields that are actually calculations
    * methods    - functions
    * watch      - routines that will execute wen a given data field changes
    * created    - lifecycle hook for new component
    * mounted    - lifecycle hook for newly rendered component
    * destroyed  - cleanup hook
3. **style**    - local css, can be tied to this component with **scoped** keyword
## Importing
A component can be imported from an npm package:
```
  import { LMap, LTileLayer, LGeoJson } from 'vue2-leaflet'
```
Or from one of your own:
```
  import Home from './components/Home'
```
In either case, you have to include the component name in the **components** section.  Note: Because of HTML vs javascript differences, a component name becomes kebab case when you use it in a tag.  For example, MyComponent becomes \<my-component\>.  
## Installing Packages
Installing packages is easy:
```
  npm install --save package-name
```


