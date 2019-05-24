# Template 3 - Events

## Standard Events
Standard, or HTML DOM events are the ones that come with HTML, such as click, mouseover, etc.  Vue provides the v-on directive so that you can listen for events and route them to your handler routines.  Here is an example for the click event:
```
<div class="col-md-2">
  <button class="bg-primary" @click="clearSelections()">
    Clear Selections
  </button>
</div>
```
@ is shorthand for "v-on:".  clearSelections() is defined under methods: in the script part of the component.

w3schools has a comrehensive list of HTML events at

     [https://www.w3schools.com/tags/ref_eventattributes.asp](Events)

I notice that all these begin with "on", which should be left off
in vue code.

## Custom Events
Vue provides the $emit statement for firing off custom events.  These are used to send messages from child components to parents.  There are two places where you put code for custom events:
1.  At the parent level, you include an @ stmt in the template code to listen for the event.
2.  In the child, you have an $emit stmt to fire the event at the appropriate time. 

Parent Code
```
<ColorControl :opc="opacity"
  v-on:update:opacity="opacity = $event"
/>
```
The naming convention for custom events is \<field name\>:\<action\>.  In the above case, the event is an update to the opacity variable.  Instead of using a handler method, we can put a javascript expression within double quotes, as here. 

Child Code
```
watch: {
    opacity: function(newVal) {
      this.$emit('update:opacity', newVal)
    }
}
```

The most frequent use for custom events is to provide 2-way binding on a field.  Here's how it works:
1.  The parent feeds a given prop down to the child.
2.  The child sends an event whenever the field's value changes locally.
3.  The parent listens for the event.
4.  The event handler updates the parent's copy of the field, completing the cycle.  

## v-model
The v-model directive does 2-way binding for HTML form fields, specifically input, textarea, and select types.  It does all the things necessary behind the scenes, making it very simple and convenient to use.  

```
<input v-model="message" placeholder="edit me"/>
<p>Message is: {{message}} />
```
This [Reference](https://vuejs.org/v2/guide/forms.html) explains how to use v-model with various HTML form types. See also [Bootstrap Input Guide](https://bootstrap-vue.js.org/docs/components/form-input).  

