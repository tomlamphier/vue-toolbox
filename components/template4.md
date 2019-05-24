# Template 4 - v-for
v-for is used to iterate over an array and flat map it out to some tag, typically a list \<li\>.  There used to be a v-repeat, but it seems to be replaced by v-for as of version 2.  

Vue tries to be efficient, and one of these efficiencies is using keys to identify elements in an iteration if possible.  This allows Vue to reuse elements that are unchanged should a re-render be necessary.  You can disregard the whole key thing if your iteration is simple and is not expensive to redraw.  But the guide recommends the key.  I get an eslint error if I leave it out.

Assuming that you opt for the key, you have to have a field in your object that is a unique ID.  And this means you may have to enhance your data with such a field before using the v-for.

Here's an example from jsfiddle:
```
<ul id="example-1">
  <li v-for="item in items" :key="item.id">
    {{item.message}}
  </li>
</ul>

var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      {id: '1', message: 'Foo'},
      {id: '2', message: 'Bar'},
      {id: '3', message: 'ABC'}
    ]
  }
})
```