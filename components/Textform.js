import { useState } from "react";

export default function TextForm(prop){
    {/*const [inputVal,setInput] = useState('');     
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
    }

    const convertToLower = ()=>{
        setInput(inputVal.toLowerCase());        
    }
    const clearText = ()=>{
        setInput('');   
        wordCount(0);
        charCount(0);
    }*/}
    const fontStyle = {color:prop.mode==="dark"?"white":"black"};
    return(
        <>
        <h1 style={{color:prop.mode==="dark"?"white":"black"}}>{prop.heading}</h1>
        <div className="container mb-3">
        <textarea className="form-control" style={{backgroundColor:prop.mode==="dark"?"white":"grey"}} placeholder="Leave a comment here" id="Enter Your Text" rows={8} value={prop.inputVal} onChange={prop.change}></textarea>
      </div>
      <button className="UpperCase" onClick={prop.convertToUpper}>Covert To Upper Case</button>
      <button className="LowerCase" onClick={prop.convertToLower}>Covert To Lower Case</button>
      <button className="ClearText" onClick={prop.clearText}> Clear Text </button>
      <div className="container my-3">
        <h2 style = {fontStyle}> Your Text Summary</h2>
        <p style = {fontStyle}>{prop.word} words, {prop.lett} characters</p>
      </div>
      </>

    );
}