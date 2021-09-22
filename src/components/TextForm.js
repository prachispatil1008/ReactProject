import React, {useState} from 'react'


export default function TextForm(props) {
   const handleUpClick =()=>{
        console.log("Uppercase was clicked!!!!!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!!!", "success");
    }
   const handleOnChange =(event)=>{
       setText(event.target.value);
        console.log("handle on change was clicked!!!!!");   
    }
    const handleLowClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!!!", "success");
    }
    const handleClearClick =()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text is cleared!!!", "success");
    }

    const handleCopy =()=>{
        let text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy text successfully!!!", "success");
    }
    const handleExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed successfully!!!", "success");
    }
    //const [text, setText]= useState('Enter text here....');
    const [text, setText]= useState('');
    //text ="new text"; //wrong way to change text
    
    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>    
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'#ccf0f7':'rgb(73 103 109)', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8" ></textarea>
                <button disabled={text.length ===0} className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length ===0} className="btn btn-primary my-3 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length ===0} className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear All Text</button>
                <button disabled={text.length ===0} className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length ===0} className="btn btn-primary my-3 mx-1" onClick={handleExtraSpace}>Handle Extra Spaces</button>

            </div>
        </div>
        
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h4>Your text summary</h4>
            <div className="alert" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'#ccf0f7':'rgb(73 103 109)', border: "1px solid white"}} role="alert">
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
                <p>To read all the words we required {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes.</p>  
            </div>
        </div>

        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h4>Preview</h4>
            <div className="alert" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'#ccf0f7':'rgb(73 103 109)', border: "1px solid white"}} role="alert">
                <p>{text.length>0?text:"Nothing to Preview !!!"}</p>
            </div>
        </div>


        </>
    )
}
