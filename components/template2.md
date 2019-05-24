# Template 2 - Simple Directives
A **directive** is a statement used in the template section to control how elements are displayed.  There are about a dozen directives.  

## v-if and v-show
These two control whether an element is displayed or not based on a boolean expression.
```
<div id="errormsg" v-if="hasErrors">
  {{errmsg}}
</div>
```
The difference between v-if and v-show is that v-show builds the dom element and hides/unhides it, while v-if builds/deletes the dom element.  I prefer v-if in most cases.

There is a v-else directive that can be combined with v-if in cases where you display one thing for true and another for false.
```
<div id="errormsg" v-if="hasErrors">
  {{errmsg}}
</div>
<div id="okmsg" v-else>
  OK
</div>
```

## v-html
The double moustache syntax is for displaying data.  And you can combine literals and fields to gen the output.  One thing that you can't do, though, is format HTML.  The v-html directive solves this problem simply by telling Vue that your data contains HTML and that it should be formatted that way.  
```
<div v-html="myblogpost" </div>
```

## v-class
This directive can be used to toggle one or more css classes for an element.  You give it an object where the key names are claass and the values are boolean expressions.  A true value means that the class is applied; false means the class is not applied.
```
<div v-class="{err: hasError}">
```
v-style works like v-class when you just want to add a few style attributes instead of a class.  
 
