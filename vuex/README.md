# Vuex Global Data
Vuex is a Vue add-on that gives a project a global state for sharing data across components.  Besides storing common data, vuex provides an organized way to access the data thru special methods belonging to the data store.  You must use these functions in order to update anything in the data store.

The easy way to include vuex in a project is to start off with "vue create project-name", then select vuex manually.  Note: Going this way means your run cmd becomes "npm run serve".

The create cmd adds file src/store.js to the new projext.  This file contains all of vuex, and has 4 sections:
1. state     - global data as key/value fields
2. mutations - functions that can be called by components to update state
3. getters   - computed fields 
4. actions   - async routines that perform some process, then come back and call mutations to update state

The vuex install boilerplate code injects a reference to the store into all components, and that is "this.$store".  The components access the global data and operations off this prefix.
* data is simply this.$store.state.fieldname
* mutation is this.$store.commit('mutname', optional_payload)
* getter is this.$store.getters.computed_field
* action is this.$store.dispatch('actionname', optional_payload)

Coding the vuex part is simple, with just a few conventions to remember.
1. **State:**  These are key/value pairs like you have in the data section of a component, except they are not enclosed in a function because all components see the same copy.
2. **Mutations:**  A mutation is a a function, and always has state as its first parameter. This gives the mutation a way to update fields in the state.  Mutations can have a second parameter, which is called the payload.  It is an object holding data input for the op.
3. **Getters:**  A getter is a function. Like a mutation, it has state as the first parameter and an optional payload.  
4. **Actions:**  An action is a function too.  It has context as its first parameter.  Context is a pointer to the entire vuex store, hence you can call a mutation with context.commit.  Usually an action performs some async operation and when that is done, the action commits the result to the state.  Actions, like the others can have a second payload parameter.