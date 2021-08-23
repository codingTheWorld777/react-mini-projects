# Getting Started with Create React App

## Link
* [https://08-songs-maf0uoiiq-codingtheworld777.vercel.app/](https://08-songs-maf0uoiiq-codingtheworld777.vercel.app/)

## Summary
/**
 * App Structure: 
    * SongList
        * SongItem
    * SongDetail
 * **Actions Creator -> Actions -> Dispatch -> Reducers -> Store**
 * **React-redux** system:
    * **Provider**: The **<Provider>** component makes the Redux store available to any nested components that need to access the Redux store. (usually render at the top level of app);
    * **connect function**: it is used to connect a React component to Redux **store**, usually **first argument** of **connect** function is a **mapStateToProps** function, and this function is used to connect the component that includes this **mapStateToProps** function to our **redux store** (maybe we just need a piece of datas in our **store**), the **second argument** is an **action creator function** that will be automatically connect to **dispatch** function of **store** and is used to add an action and change our store's data thanks to the help of **reducers** function.
*/

## Screenshot
* ![Screenshot-Inllustration 1](https://i.imgur.com/lNYrFK5.png)
* ![Screenshot-Inllustration 1](https://i.imgur.com/kznrAXn.png)

