import "./App.css";
import React, { useState, useEffect } from "react";
import Counter from "./component/Counter";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(() => new Date()), 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <div className="App-header">
        <h2>{time.toLocaleTimeString()}</h2>
        <header>
          <h1>React theory</h1>
        </header>
        <ol>
          <li>What is a component in react?</li>- A component is a small and
          reusable piece of code that represents a part of the user
          interface(UI). It can contain any combination of HTML,CSS and JS and
          is easily able to be inserted into a bigger webpage.
          <li>What is JSX in react</li>- Javascript Syntax extention is an
          extention that allows us to write HTML like codes directly in our JS
          files. This makes the codes simpler to read as we do not have to go
          back and forth between two files.
          <li>What is State in react?</li>- In react a state is an object that
          stores data and can change over time. It affects the behaviour of a
          component and its rendering. It is essentially a way for a component
          to keep track of its own data and update their apperance and behaviour
          accordingly. Using state allows our react component to be dynamic by
          allowing users to give input and change component over time.
          <li>What is Props?</li>
          -Props in short is for properties. It refers to a way to pass data
          from a parent component to a child component. Props is a mechanism
          that shares data from one component to the other. Reacts props allows
          us to use reusable component in which it allows us to change different
          data and behave differently based on the data.
          <li>What is useState?</li>- useState is a built in react hook that
          allows us to manage state using functional component. It allows us to
          declare a state variable and a function that can update the state
          variable.
          <li>What is useEffect?</li>-useEffect is a built in react hook, it
          allows us to run sideeffects in our components. useEffect takes two
          arguments a function that performs the side effect and an array of
          dependencies that tell us when the effect should be re-run.
          <Counter />
          <li>useEffect:</li>
          There are two arguments that are passed in useEffect. 1.A setup
          function with setup codes that connects to the system. -This has a
          cleanup function with cleanup codes that disconnects from the system.
          2. A list of dependencies including every value from your components
          used inside those functions. eg: [ count ]. The effect will only run
          if count has been changed since the last render. if the list of
          dependencies is empty the effect will only run once when the component
          is mounted and not again until the component is unmounted.
        </ol>
      </div>
    </div>
  );
}

export default App;
