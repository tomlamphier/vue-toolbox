# Template 1 - Content
If you think of a component as a small MVC, the template is the view part.  It occupies a rectanglar area onscreen.  The template section of a .vue file consists of the \<template\> tag, and within that, a \<div\> tag.  The body of the template is inside this div.
## Fields
Fields can be inserted into the content with double braces. A field is a data item (from the script data), a prop (passed from the parent), or a computed item (looks like  a field, but is backed by a function in the script). The **this** keyword is not used for fields in the template, whereas it is usually required within the script code.

Fields are reactive.  Changes to the backing item propagate to all the references for that item. This is a very useful and important quality.
## Components
Components are the core of a vue app; everything centers around them.
Each component has a tag like an HTML tag that is used to compose the component into a web page.  When you do this, you also have to import the component in the script block and list it among the included components.
## Props
A prop is a parameter that looks like an HTML attribute, and which is used to pass data from a parent component to a child.  You have to declare each prop a component uses in its script section (under props:).  Props use kebab case.  There are two ways to use a prop:
1.  A simple static assignment, such as my-prop="hello world"
2.  A reactive bind where changes at the parent level propagate down to the child, for example: v-bind:my-prop="message" Note: The shorthand for v-bind: is :

Data flow is one way, from parent to child.
