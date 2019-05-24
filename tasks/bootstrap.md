# Bootstrap
Bootstrap is a CSS and jquery package for professional-looking web pages.  Here's how to include it in an existing vue project:
1.  npm install --save bootstrap-vue jquery
2.  Include these stmts in main.js:

    import BootstrapVue from 'bootstrap-vue'  
    import 'bootstrap/dist/css/bootstrap.min.css'  
    import 'bootstrap-vue/dist/bootstrap-vue.css'  

    Vue.use(BootstrapVue)

Enclose a page in a \<div\> with class="container".  This sets up a
bootstrap grid and gives you a small margin on either side.
container-fluid is a variant of container that has smaller side margins.
Subdivide the page with "row" elements, and these into col-xx-n for
the columns, where xx = sm, md, lg, xl and n is 1 to 12.  The xx codes
control responsiveness. Say you are using sm (cellphone size).
Bootstrap will stack your columns vertically if the display size
is <= cellphone, otherwise display them normally across the screen.

The app structure that you get from vue cli + routing is App.vue on top
and \<router-view\> for the overlays.  I find that the main div in App
should have class="container",  any content in App should be enclosed
in class="row", and each overlay should have class="row".  All this is
to avoid mixing bootstrap with non-bootstrap.

See: [Bootstrap Vue Docs](https://getbootstrap.com/docs/4.0)

