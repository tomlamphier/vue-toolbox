(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{192:function(e,t,n){"use strict";n.r(t);var o=n(0),a=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"component-nesting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-nesting","aria-hidden":"true"}},[e._v("#")]),e._v(" Component Nesting")]),e._v(" "),n("p",[e._v("One of the important design principles of vue is that you build\napplications by composing small, reusable blocks, such as headers,\nnav-bars, etc.  Of course this is only common sense.")]),e._v(" "),n("p",[e._v("A component has a selector, which is the name of a HTML-like tag.  And\nyou use that selector in a template to place the component in the app's\npage.  This fragment from App.vue includes two components.")]),e._v(" "),n("pre",[n("code",[e._v(' <div class="col-sm-5">\n    <Markdown />\n    <StatusBar />\n </div>\n')])]),e._v(" "),n("p",[e._v("A basic component has a template that contains HTML content; sometimes\nyou want to mix nested components in with the content, and there's a way\nto do that, ie slots.")]),e._v(" "),n("p",[e._v("The <slot> tag is a placeholder in a component's template that will\ntake in anything between a component's opening and closing tags.  To use\nan example from the vue docs, spose you have a <navigation-link>\ncomponent and it has this in the template:")]),e._v(" "),n("pre",[n("code",[e._v(' <a v-bind:href=url class="nav-link>\n   <slot></slot>\n </a>\n')])]),e._v(" "),n("p",[e._v("This gives you a link where the href comes from a prop and the text is\n(at the moment) a placeholder.  You use this component like this:")]),e._v(" "),n("pre",[n("code",[e._v(' <navigation-link url="some url">\n   Go to someplace\n </navigation-link>\n')])]),e._v(" "),n("p",[e._v("The rendered <navigation-link> will contain the text we want.")]),e._v(" "),n("p",[e._v("There are times when we want to have several slots instad of just one.\nYou can do this as follows:")]),e._v(" "),n("pre",[n("code",[e._v(' 1.  <slot name="firstslot"></slot>\n     - - - more content and slots\n\n 2.  in template code:\n     <selector-name>\n       <template slot="firstslot">\n         - - - content - - -\n       </template>\n\n       - - - more HTML and <template> tags - - -\n     </selector-name>\n')])]),e._v(" "),n("p",[e._v("The magic is using <template> blocks that point back to the target slots by name.")]),e._v(" "),n("p",[e._v("One additional thing you can do in a slot is to use the keyword "),n("em",[e._v("scope")]),e._v(" to point to data fields you want to pass along to the slot. Here we are passing along "),n("em",[e._v("row")]),e._v(" and "),n("em",[e._v("columns")]),e._v(".")]),e._v(" "),n("pre",[n("code",[e._v(' <template scope="{row, columns}">\n   <tr :class="{info: selected_rows.indexOf(row) !== -1}"\n     @click="selectRow(row)">\n     <template>\n       <datatable-cell v-for="(column, j) in columns"\n         :key="j" :column="column" :row="row">\n       </datatable-cell>\n     </template>\n   </tr>\n </template>')])])])}],!1,null,null,null);t.default=a.exports}}]);