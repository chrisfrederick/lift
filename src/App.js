import 'bootstrap/dist/css/bootstrap.css'
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import { useState } from 'react';
import Results from './Components/Results';

function App() {
  const [myData, setMyData] = useState({})
  const addData = (data)=>{
    //do a thing
    console.log(data)
    setMyData(data)
  }
  return (
      <div className="container row">
        <Form onSubmitChar={addData}></Form>
        <Results oneChar={myData}></Results>
      </div>
    
  );
}

export default App;
