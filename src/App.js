import React, { Component } from 'react';
import './App.css';
import PersonComp from './Person/Person'

class App extends Component {

  state = {
    persons: [
    {name:'Ale', age:24},
    {name:'Daniel' ,age:28},
    {name:'Savino ', age:19} ],

    othgerState:'some other value', 

    showPersons: false

  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name:newName, age:24},
        {name:'Daniel' ,age:28},
        {name:'Savino ', age:20} ]
    
    
    });

  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name:"Ale", age:24},
        {name: event.target.value ,age:28},
        {name:'Savino ', age:20} ]
    
    
    });

  }

  togglePersonsHandler = () => {

    const showPersonState = this.state.showPersons;
    this.setState(
      // not good practice to acces tis inside of setState
       // {showPersons: !this.state.showPersons}
       {showPersons: !showPersonState}

    );

  }


  render() {
    // inline style exmaple , must wrap all values in quotes
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border:'2px solid blue',
        padding: '8px',
        cursor: 'pointer'

      };


    return (
      <div className="App">
        <h1>Hi im a react app wowo </h1>
        <p>this is really working !!</p>
        <button 
        style = {style} 
        onClick={this.togglePersonsHandler}>Toggle Persons</button>

{ this.state.showPersons ?
        <div>
        <PersonComp 
        name={this.state.persons[0].name} age={this.state.persons[0].age}   />
        <PersonComp name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,"Alessssandro")}
        changed={this.nameChangedHandler}
        >My hobbies are: board games</PersonComp>
        <PersonComp 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
        </div>
    : null
  }
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello im a react app'));
  }
}

export default App;
