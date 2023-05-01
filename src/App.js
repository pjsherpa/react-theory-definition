import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header>React theory</header>
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
        </ol>
      </div>
    </div>
  );
}

export default App;
