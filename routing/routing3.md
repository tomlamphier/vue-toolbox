# Navbar
I prefer to use bootstrap-vue's navbar because it has a clean design and it works for smaller screens, ie moble devices.  

Before coding the navbar, install bootstrap-vue (See Tasks for this.).

Now add boilerplate code at the beginning of the template in App.vue.
```
<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <b-navbar toggleable="md" type="light" variant="ds-yellow">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

          <b-navbar-brand to="/">Neighborhood NYC</b-navbar-brand>

          <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
              <b-nav-item to="/foo">Foo</b-nav-item>
              <b-nav-item to="/bar">Bar</b-nav-item>
            </b-navbar-nav>

          </b-collapse>
         </b-navbar>
       </div>
     </div>
     - - -   other home page things   - - -
     <router-view/>
  </div>
</template>
```

And a bit of styling:
```
<style scoped>
.bg-ds-yellow {
  background-color: yellow;
}
</style>
```
Finally, change the \<b-nav-item\> elements to fit your navigation requirements.
