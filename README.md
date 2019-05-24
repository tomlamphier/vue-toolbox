# Vue Toolbox
## Introduction
Vue is a javascript framework for building web-based front ends.  It belongs to the node/npm ecosystem.  The first version was released in 2014 by Evan You.  He created Vue as an alternative to Angular, which he felt was too restrictive.

The major features of Vue are:
1. It is designed around components. A component is a combination of a view, processing routines, and styling.
2. There are many component packages that can be imported into an app and used.  Datatables is one example.
3. Vue is reactive (which I don't quite understand).  

## This Toolbox
One of the problems in programming is learning and retaining technology.  I've often painfully learned aparticular skill (example ggplot in R), only to find that I forget what I knew in a month.  This toolbox is a permanent rexource vor Vue programming. It will reside on github pages.  ANd hopefully I will add to it and make it better over time.  

The ideal use case for my toolbox is finding that I need a paticular part of Vue (say adding bootstrap to a Vue project).  I should be able find a concise topic that explains how to accomplish my task.  Up until now, I have used Google to search for how-to's, but that can be exhausting in its own way.

There are many things that this toolbox will skip over for the sake of brevity.  I won't cover installing Vue, for instance.  

## Getting Started
Begin by using the Vue cli:
```
vue init webpack project-name
```
You will be prompted for several optional pieces.  Say no to eslint (I hate it.).  The cli script will gen you a hello-world app, whuch you can use as a skeleton for your project.

You run the development version with:
```
npm run dev
```
The app knows if you change and save a source file.  Updates make the app recompile/restart, which is very convenient as you make incremental changes.

I use Visual Studion Code for an IDE.  


