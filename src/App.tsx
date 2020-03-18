import React from "react";

class App extends React.Component<{}, { count: number }> {
  state = {
    count: 0
  }; // the name of object must be "state" which is declared already in React.Componenet

  add = () => {
    this.setState(currentState => ({ count: currentState.count + 1 })); // setState = I'm gonna send this new state object and overrap this to a previous state object, and "render" this into HTML structure.
  };
  delete = () => {
    this.setState(currentState => ({ count: currentState.count - 1 })); // setState(current =>({})) in this, current call the existing state object and, {} inside ({}) is used as a new state object structure
  };

  componentDidMount() {
    console.log("component rendered only one time after render() is activated");
    setTimeout(() => {
      console.log("five seconds passed");
    }, 5000);
  }

  componentDidUpdate() {
    console.log("always executed after each render() is run");
  }

  componentWillUnmount() {
    console.log(
      "It works when component is unmounted like leaving the page I saw"
    );
  }

  render() {
    const { count } = this.state; // it means "count" comes from  this.state(App.state)
    console.log("Im rendering");
    return (
      <div>
        <h1>The number is : {count ? count : "not exist"}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.delete}>Delete</button>
      </div>
    );
  }
}

export default App;
