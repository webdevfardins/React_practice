import React, { Component } from "react";
import "./Person.css";
class Person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  //     this.state={
  //         name:"Fardin",
  //         age:23
  //     }
  // }
  //     nameChangeHandler(){
  //         console.log(this.state);
  //         this.setState({name:"Faisal", age}, ()=>{
  //             console.log(this.state);
  //         });
  //     }

  render() {
    const style = {
      fontSize: "40px",
      color: "gray",
    };
    return (
      <div className="PersonBox" onClick={this.props.remove}>
        {this.props.index}
        <h1 style={style}>
          <label style={{ color: "red", fontSize: "40px" }}>Name</label>{" "}
          <i>{this.props.name}</i> <br />
          <label>age </label>
          <i>{this.props.age}</i>
          {/*<i>hey Dear {this.state.name} {this.state.age} Year Welcom to my site</i>
               <br/>
    <button onClick={() =>this.nameChangeHandler()}>click me</button>*/}
        </h1>
      </div>
    );
    // return(
    // React.createElement(
    //     "div",
    //     {class:"App-header"},
    //     React.createElement(
    //         "h1",null,
    //         React.createElement(
    //             "i",null,"Welcome to my page"
    //         )
    //     )
    // )
    //);
  }
}
export default Person;
