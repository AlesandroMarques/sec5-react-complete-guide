// ES6 create funtion without using function keyword 
import React from 'react';
import styled from 'styled-components'
//import './Person.css';

//const StyledDiv = props => styled.div`
// create react componoent to hold this styled div 
//, dont need StyledDiv = props => styled.div` becuase styled dic retyurns a react compoent so can just assign with = 
const StyledDiv =  styled.div`
width:60%;
margin:16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding:16px;
text-align: center;

@media (min-width: 600px){
    width:450px;

}
`

const person = (props) => {
return ( 
//<div className="Person">
<StyledDiv>
<p onClick={props.click}>i am {props.name} and i am {props.age} years old </p>
<p> {props.children}</p>
<input type="text" onChange={props.changed}  value={props.name}/>
</StyledDiv>
//</div>
    );


};

export default person;