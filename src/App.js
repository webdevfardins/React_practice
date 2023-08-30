
import './App.css';
import Person from "./Components/Person/Person.js"
//import Main from "./Components/Main"
//import Demo from "./Components/Demo"
function App() {
  return (
    <div className="App">
      {/* <Demo number="1"/> */}
       <Person  Name="Faisal" age="20"/>
       {/* <Demo number="2"/>
       <Person  Name="Sonu" age="22"/>
       <Demo number= "3"/>
       <Person  Name="Irshad"/> */}
       
    </div>
  );
}

export default App;
