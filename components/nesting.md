# Component Nesting
One of the important design principles of vue is that you build
applications by composing small, reusable blocks, such as headers,
nav-bars, etc.  Of course this is only common sense.

A component has a selector, which is the name of a HTML-like tag.  And
you use that selector in a template to place the component in the app's
page.  This fragment from App.vue includes two components.
    
     <div class="col-sm-5">
        <Markdown />
        <StatusBar />
     </div>

A basic component has a template that contains HTML content; sometimes
you want to mix nested components in with the content, and there's a way
to do that, ie slots.

The \<slot\> tag is a placeholder in a component's template that will
take in anything between a component's opening and closing tags.  To use
an example from the vue docs, spose you have a \<navigation-link\>
component and it has this in the template:

     <a v-bind:href=url class="nav-link>
       <slot></slot>
     </a>

This gives you a link where the href comes from a prop and the text is
(at the moment) a placeholder.  You use this component like this:

     <navigation-link url="some url">
       Go to someplace
     </navigation-link>

The rendered \<navigation-link\> will contain the text we want.

There are times when we want to have several slots instad of just one.
You can do this as follows:

     1.  <slot name="firstslot"></slot>
         - - - more content and slots

     2.  in template code:
         <selector-name>
           <template slot="firstslot">
             - - - content - - -
           </template>

           - - - more HTML and <template> tags - - -
         </selector-name>

The magic is using \<template\> blocks that point back to the target slots by name.

One additional thing you can do in a slot is to use the keyword *scope* to point to data fields you want to pass along to the slot. Here we are passing along *row* and *columns*.

     <template scope="{row, columns}">
       <tr :class="{info: selected_rows.indexOf(row) !== -1}"
         @click="selectRow(row)">
         <template>
           <datatable-cell v-for="(column, j) in columns"
             :key="j" :column="column" :row="row">
           </datatable-cell>
         </template>
       </tr>
     </template>