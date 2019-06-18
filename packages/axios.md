# Axios for HTTP
vue-axios is a package for making API requests against a back end server or remote service.  It uses standard HTTP calls and gets back JSON data.  Axios operates asynchronously, hence you chain an HTTP command with a then clause (the handler for the response message) and optionally a catch clause for errors.  

A brief tutorial in the vue documentation can be found at [this address](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html).

## Install and Boilerplate Code
```
npm install --save axios vue-axios
```
In main.js:
```
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios) 
```
Also, because of cross origin restrictions, you need this on the server side in the controller, just above the URI mapping a-note.
```
@CrossOrigin(origins = "http://localhost:8081")
```
8081 is the port the vue app is running on.
## A Simple GET Example
This example is from the NYC Neighborhoods project.  We want to retrieve a list of complaint types from the back end server.  There are two parts to this:

1. Vue code in the component's created() section
```
created() {
  this.axios.get('http://localhost:8080/complaints')
    .then(response => {
      this.complaints = response.data  // save response
      this.isLoaded = true             // set switch to loaded
    })
    .catch(error => console.log(error))
  },
```
2. Controller code in the spring application
```
@RestController
public class ComplaintController {
    @Autowired
    ComplaintRepository complaintRepository;

    @CrossOrigin(origins = "http://localhost:8081")
    @GetMapping("/complaints")
    public List<Complaint> getComplaints() {
        return complaintRepository.findAllByOrderByType();
    }
}

```
## POST Example
You can pass parameters with a GET request, but I have found that anything you'd want to do that way could be done with a POST.  Rather than trying to remember the coding for a GET, it's easier to stick with POST.

The first thing you do for a POST is to create an object to hold the data.
```
dat = {
  neighborhoods: this.selnh,
  complaints: this.selcompl
}
```
Next, you include it in a call to axios.
```
this.axios.post('http://localhost:8080/choropleth', dat)
.then(- - - some processing - - -)
```
On the server side we define a bean class to receive the data.  Spring takes care of marshalling the data fields.
```
package com.datasciex.rest311a.beans;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ChoroplethQuery {
    private String[] neighborhoods;
    private String[] complaints;

    @JsonCreator
    public ChoroplethQuery(@JsonProperty("neighborhoods") String[] neighborhoods,
                           @JsonProperty("complaints") String[] complaints) {
        this.neighborhoods = neighborhoods;
        this.complaints = complaints;
    }

    public String[] getNeighborhoods() {
        return neighborhoods;
    }
    public String[] getComplaints() {return complaints;}

}
```
Note that we use @JsonProperty to bind the JSON key names to our Java fields. And the get functions are required. Now we can use our query bean in our controller to insert the data.
```
    @CrossOrigin(origins = "http://localhost:8081")
    @PostMapping("/choropleth")
    public ChoroplethQueryRes choro(@RequestBody ChoroplethQuery choroplethQuery) {
    - - - process - - -
  }
```
The above code returns a class called ChoroplethQueryRes, which is another bean that we define to translate our Java result back to JSON.  Provided we have defined this bean correctly, Spring will take care of producing a JSON response to go back to the client.  Here is the code:
```
package com.datasciex.rest311a.beans;

public class ChoroplethQueryRes {
    private Count[] counts;

    public ChoroplethQueryRes() {}

    public ChoroplethQueryRes(Count[] counts) {
        this.counts = counts;
    }

    public Count[] getCounts() {
        return counts;
    }
}
```
Doing a POST may seem like a lot of work, but it is a simple series of steps that are easy to set up and verify.
1. Create a javascript object to hold your POST parameters, use it in the axios call after the URL.
2. Define a bean that matches the POST input field for field, use it with the @RequestBody a-note.
3. Define a bean to hold the query result, make that the return type of the controller function.
