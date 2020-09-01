import React, { Component } from 'react';
import styled from 'styled-components'
import appClasses from'./App.css';
import PersonComp from './Person/Person'




const StyledButton = styled.button`
background-color: ${props => props.changeColors ? 'red' : 'green'};
color: white;
font: inherit;
border: 2px solid blue;
padding: 8px;
cursor: pointer;

&:hover{
  background-color: ${props => props.changeColors ? 'salmon' : 'lightgreen'};
  color: black;

}
`;


class App extends Component {

  state = {
    persons: [
    {id:'a1',name:'Ale', age:24},
    {id:'a2',name:'Daniel' ,age:28},
    {id:'a3',name:'Savino ', age:19} ],

    othgerState:'some other value', 

    showPersons: false

  }

  deletePersonHandler = (personIndex) => {
    // make copy of persons array
    // not actaully a copy its a reference therefore not a realcopy and bad practice 
   // const personArrCopy = this.state.persons;

   //A) use slice with no arguments 
   //const personArrCopy = this.state.persons.slice();
   //B) use spread operator ...
   const personArrCopy = [...this.state.persons];
   


    //remove element assiaoted with index recieved 
    personArrCopy.splice(personIndex,1);

    this.setState({persons: personArrCopy});




  }

  nameChangedHandler = (event, elementId) => {
    const personToChangeIndex = this.state.persons.findIndex(p => {
      return p.id === elementId;
    });


    //this retirns a pointer to original object therfore not best practice 
   // const personToChange = this.state.persons[personToChangeIndex];

   //spreads the this.state.persons[index ] into its elements (is, name , age)
   //the the { } wrapper puts it into an object 

   const personToChangeObj = {...this.state.persons[personToChangeIndex]};

   personToChangeObj.name = event.target.value;


   //make copy of persons array 
   const personArrCopy = [...this.state.persons];
   //update 
   personArrCopy[personToChangeIndex] = personToChangeObj;
   

    this.setState({
      persons: personArrCopy

    }
    );

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

    let btnClass = [appClasses.Button];

let personsOutput = null;
if(this.state.showPersons){
  personsOutput = (
    <div>
      {this.state.persons.map( (p,index) => {
        return (<PersonComp
        name = {p.name}
        age={p.age}
        click = {() => this.deletePersonHandler(index)}
        // also works 
       // click = {this.deletePersonHandler.bind(this,index)}
       changed={(event) => this.nameChangedHandler(event,p.id)}
        key = {p.id}
        />)
      }
      )}
        
        </div>
  );

      btnClass.push(appClasses.Red);

}


// "red bold "
let pCssClasses = [];
if(this.state.persons.length < 3 ){pCssClasses.push(appClasses.red);}
if(this.state.persons.length < 2 ){pCssClasses.push(appClasses.bold);}


    return (
      <div className={appClasses.App}>
        <h1>Hi im a react app wowo </h1>
        <p className = {pCssClasses.join(' ')}>this is really working !!</p>
        <button className = {btnClass.join(' ')}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {personsOutput}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello im a react app'));
  }
}

export default App;
