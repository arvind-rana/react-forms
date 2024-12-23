import React from 'react';
import { useState } from 'react';

const App = () => {

const [name,setName] = useState("");
const [fullName,setFullName] = useState();

const[lastName, setLastName] = useState("");
const[lastNamenew,setLastNamenew] = useState("");

const inputEvent = (event) =>{
 setName(event.target.value);
}
const onSubmits = (event) => {
  event.preventDefault(); 
  setFullName(name);
  setLastNamenew(lastName);
}
const inputEventTwo = (event) =>{
  
  setLastName(event.target.value);
}

return (
<>
<div>
<form onSubmit={onSubmits}>
<div>
<h1>Hello {fullName} {lastNamenew}</h1>
<input type="text"placeholder='Enter your name' onChange={inputEvent} value={name}/>
<br />


</div>
<div>

<input type="text"placeholder='Enter your last name' onChange={inputEventTwo} value={lastName}/>
<br />

<button type="submit">click me</button>
</div>
</form>
</div>
</>
);
}
export default App;