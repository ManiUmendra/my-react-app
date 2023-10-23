import './App.css';
import React, { useState } from 'react';
import NavBar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//function myfunc(){
//  const val = document.getElementById("txt").value 
//  console.log(val)
//}


function App() {
  //const myfunc = (event) => {
    //event.preventDefault(); // Prevent the default form submission behavior
    //console.log('Search button clicked'); // Log a message to the console
  //};
  //let name ="Hello World"

  const [mode, setMode] = useState('dark');
  const [text, setText] = useState('Enable Light Mode');

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });

    setTimeout(() => {
      setAlert(null);
    },3000);
  }

  const onChange = ()=>{
    if(mode==='dark'){
      setMode('light');
      setText('Enable Dark Mode');
      document.body.style.backgroundColor="white";

      showAlert('Light Mode Initiated Successfully','success');
    }
    else{
      setMode('dark');
      setText('Enable Light Mode');
      document.body.style.backgroundColor="#042743";
      showAlert('Dark Mode Initiated Successfully','success');
    }
  }

    const [inputVal,setInput] = useState('');     
    const [word, wordCount] = useState(0);
    const [lett, charCount]= useState(0);

    const change = (event)=> {
        //let val = event.target.value;
        //setInput(val.toUpperCase());
        let val = event.target.value
        setInput(event.target.value);
        
        let result = val.split(' ').filter(word => word !== '').length;
        wordCount(result);

        let character = val.trim().length-result+1;
        charCount(character);

    }
    const convertToUpper = ()=>{
        setInput(inputVal.toUpperCase());
        setAlert({
          msg:"Converted To Upper Case",
          type:"success"
        })
    }

    const convertToLower = ()=>{
        setInput(inputVal.toLowerCase());   
        setAlert({
          msg:"Converted To Lower Case",
          type:"success"
        });     
    }
    const clearText = ()=>{
        setInput('');
        wordCount(0);
        charCount(0);

        setAlert({
          msg:"All text are cleared",
          type:"success"
        });
    }
  return(  
    <div>
      <Router>
<NavBar title="MyTextutil" mod={mode} text={text} onChange={onChange}/>
<Alert mode={alert}></Alert>
<div className="container">
<Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<TextForm heading="Operation Over Text" mode={mode} inputVal={inputVal} word={word} lett={lett} change={change} clearText={clearText} convertToLower={convertToLower} convertToUpper={convertToUpper} />}>
          </Route>
  </Routes>
{/*<TextForm heading="Operation Over Text" mode={mode} inputVal={inputVal} word={word} lett={lett} change={change} clearText={clearText} convertToLower={convertToLower} convertToUpper={convertToUpper} />*/}
{/**<About/>*/}
</div>
</Router>
</div>
  );
}



export default App;
