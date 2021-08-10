# Getting Started with Create React App

## Link
[https://04-pics-app-d8afj2kzl-codingtheworld777.vercel.app/](https://04-pics-app-d8afj2kzl-codingtheworld777.vercel.app/)

## Summary: In this section, I learn about:
/** 
  * **Event handler** in React 
  * **Uncontrolled** vs **Controlled** component
    * We store the informations in our React component (in its state), not in DOM 
  * To prevent the default form behavior of submitting (to avoid a web page reloading after submitting a form):
    * In React: Use e.preventDefault() and put it into onSubmit event
    * In DOM: We simply write JS code in onsubmit="" event between **""**
  * Understand **this** context in JS. To handle **Uncaught TypeError: Cannot read property 'type' of undefined**:
    * Use **bind** method
    * Use **public class field syntax** with arrow function on class's method
    * Assign **arrow function to event**
  * Communicating Child component to Parent component
    * We create a function (method) in Parent component and pass it in Child's props 
    * We will use this Parent's function (method) in Child component to handler some datas...
    and usually this function (method) will update Parent's state
  * Fetch datas with axios
  * Handling **lists** and **keys**
    * Every list must have its key
  * Using **Ref's** for **DOM access**
    * We create a **ref** inside a class's constructor and we will wire it up into an individual element by passing it as a rough props (**ref={this.imageRef}** in this app)
    * Later on, we can access on the actual DOM note
  * Do some researchs about **grid CSS** system (not requirement)
*/