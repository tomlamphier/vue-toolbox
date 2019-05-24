# Script 1 - Imports, Data, Props
## Imports 
Import statements belong at the top of the script block. You need them for your components and for libraries provided by the Vue community.  
```
import Home from './components/Home'   // my component      
import { LMap, LTileLayer, LGeoJson } from 'vue2-leaflet'  // from a library
```
Your components must also be declared in your script, for example:
```
components: {
  Home,
  ComplaintList,
  NeighborhoodList,
  DisplayMap
},
```
## Data
Each copy of a component can have instance variables similar to the way an object does.  The syntax for the data section looks a bit complicated--it is a function that creates a fresh copy of the fields.  Fields can be string, boolean, number, array, or object (ie any JSON type).  

```
data () {
    return {
      complaints: null,
      isLoaded: false,
      tab_columns: [
        {label: 'Type', field: 'type'},
        {label: 'Frequency', field: 'level'}
      ],
      page: 1,
      per_page: 10,
      filter: '',
      selected_rows: []
    }
  },
```
Each field is a key/value pair.  When you refer to a field in the script, you need the **this.** prefix.  References in the template do not require the prefix.  Fields are reactive; changes to a field propagate to references throughout the component.

Arrays are a special case of reactive fields.  You are restricted to replacing the entire array or using splice() to remove or add elements.
```
this.selected_rows.splice(index,1) // remove one element at index point
```
## Props
Props are values passed to a component from the parent.  They are  reactive, meaning change at the parent level propagates to the child component (except constants). 

Props must be declared in the child component.  You can give them a default value in case the parent doesn't specify a value.

See [Props](/components/template1.html#props) for more about props.

```
props: ['opc'],
```
Props, like data fields are prefixed with the **this.** keyword within a script, and used without it in a template.

