# Getting Started with Create React App

## Summary: Rewrite a Youtube demo application by using Functional Components instead of using Class Components

/** 
  * Hierachy of component: 
    * App
        * SearchBar
        * VideoDetail
        * VideoList
            * VideoItem

  * Fetch datas with **axios** via **youtube API**
  * Handle **onSubmit** and **onClick** event on **SearchBar** and **VideoItem (VideoList)**
  * Show the results of video on **VideoDetail** after clicking on one VideoItem component

  * **Remark**: All datas in this exemple is fetched to the highest hierachy of component , in this case: **App**, and other components exchange data with each other through **App**.
*/
