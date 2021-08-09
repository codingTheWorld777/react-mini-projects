# Getting Started with Create React App

## Summary: Rewrite a Youtube demo application by using Functional Components instead of using Class Components

/** 
  * **Remark**: All datas in this exemple is fetched to the highest hierachy of component , in this case: **App**, and other components exchange data with each other through **App**.

  * Hierachy of component: 
    * App
        * SearchBar
        * VideoDetail
        * VideoList
            * VideoItem

  * Fetch datas with **axios** via **youtube API**
  * Handle **onSubmit** and **onClick** event on **SearchBar** and **VideoItem (VideoList)**
  * Show the results of video on **VideoDetail** after clicking on one VideoItem component
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  ## Building the reusable code by using custom hooks (beside using components)
  * About Custom Hooks: 
    * Best way to create reusable code in Reacts project (beside components)
    * Created by extracting hook-related code out of a function component
    * Custom hooks always make use of at least one primitive hook internally
    * Each custom hook should have one purpose
    * **Kind of an act form**
    * **Data-fetching is a great thing to try to make reusable**
  * Process for creating reusable Hooks
    * Identify each line of code related to some single purpose
    * Identify the inputs to that code
    * Identify the outputs to that code
    * Extract all of the codes into a separate function, receiving the inputs as arguments, and returning the outputs
    * In this example, input is **defaultSearchTerm** and **term** and output is **videos** and **function to fetch those videos** and we extract this code inside **src/hooks** folder
  * ## Screenshot
    ![Screenshot-Inllustration 1](https://i.imgur.com/Xafuxla.png)
    ![Screenshot-Inllustration 2](https://i.imgur.com/KNtvtif.png)
    ![Screenshot-Inllustration 3](https://i.imgur.com/64Zb26I.png)
    ![Screenshot-Inllustration 4](https://i.imgur.com/4ahXyHv.png)
    ![Screenshot-Inllustration 5](https://i.imgur.com/EO8chXT.png)
*/
