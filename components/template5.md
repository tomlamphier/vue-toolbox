# Template 5 - Misc
## v-ref
Normally you cannot see the data in a component from the outside.  And this is part of the Vue design.  A component can notify a parent with field updates using events, so there is a way that a parent can access (albeit indirectly) a child's state.

But there are occasions when you need the convenience of directly accessing a component's data.  This is what you would use v-ref for.  A v-ref directive on a conponent tag saves a reference to that instance under the global $refs list.  Once you have that, you can use it with standard opject notation to get to the component's data. 

Here is an example:
```
<!-- a component with ref -->
<b-tab title="Neighborhoods">
          <neighborhood-list ref="selneighborhoods"/>
</b-tab>

// code using ref 
var nhs = this.$refs.selneighborhoods.selected_rows
this.selnh = []
let i
  for (i=0; i<nhs.length; i++) {
  this.selnh.push(nhs[i].neighborhood)
}

```

