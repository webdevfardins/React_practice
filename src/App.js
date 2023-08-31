import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person/Person.js";
//import Main from "./Components/Main"
//import Demo from "./Components/Demo"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          name: " Fardin sheikh",
          age: 20,
        },
        {
          name: "Faisal Sheikh",
          age: "21",
        },
        {
          name: "Sonu Sheikh",
          age: 20,
        },
      ],
      isShow: true,
    };
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  toggleHandler() {
    this.setState({ isShow: !this.state.isShow });
  }
  removeHandler = (personIndex) => {
    const personsCopy = this.state.persons;
    personsCopy.splice(personIndex, 1);
    this.setState({ persons: personsCopy });
  };
  render() {
    let persons;
    if (this.state.isShow) {
      persons = this.state.persons.map((p, index) => {
        return (
          <Person
            key={index}
            name={p.name}
            age={p.age}
            remove={() => this.removeHandler(index)}
          />
        );
      });
    } else {
      persons = "";
    }

    return (
      <div className="App">
        <button onClick={this.toggleHandler}>Toggle</button>
        {persons}
      </div>
    );
  }
}
export default App;
