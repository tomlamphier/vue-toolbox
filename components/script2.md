# Script 2 - Methods, Computed Fields, Watches
## Methods
A **method** is an ordinary javascript function.  It has access to anything in its component.  The standard function syntax is used to define a method--not lambdas, because they have no direct access to a component's data.

The syntax for the method section is:
```
methods: {
    myfunc(parm1) {
        // code here
    },
    // ... and more functions below
  }
```
Methods are frequently used for event handlers, for example:  
```
@click="clearSelections()"
```
## Computed Fields
A computed field is a field that is defined as a routine.  To get the value of the field, Vue executes the code.  One reason to use a computed field is to simplify your template code.  Instead of having javascript code in the template, you extract it out to a separate routine.  

Computed fields are reactive; if any of the inputs change, the routine is run to get an updated value.  Results are cached, so the routine only runs initially or when something changes.

The syntax for the computed fields is:
```
computed: {
  fieldname () {
      - - - some code - - - 
      return avalue
    },
  // ... additional computed fields below
}
```
## Watches
A watch is a change monitor for a field.  A watch consists of the field name and an action routine, which gets run on any change.  The action routine has inplied parameters of newVal and oldVal.  These can be used or ignored depending on what you're doing.

Syntax
```
watch: {
  fieldname: function(val) {
    - - - some processing - - -
  },
  // ... more watch variables
}
```