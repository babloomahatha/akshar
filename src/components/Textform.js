import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick = ()=>{
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to Upper Case!","success");
    }
    
    const handleLoClick=()=>{
        // console.log("LowerCase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to Lower Case!","success");
    }

    const handleClearClick=()=>{
        let newText = " ";
        setText(newText);
    }

    const handleCapitalizedClick=()=>{
        let newText = text.split(' ').map((text)=> text.charAt(0).toUpperCase() + text.slice(1)).join(' ');
        setText(newText);
        props.showAlert("Capitalized First Letter of Strings!","success");

    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed successfully!","success");
    }
 
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
         <div className="container" style={{color:props.mode==='dark'?'white' :'black'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743' :'white',
            color:props.mode==='dark'?'white' :'black' }} id="myBox" rows="7"></textarea>
            <button className=" btn btn-info my-4 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className=" btn btn-primary my-4 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className=" btn btn-success my-4 mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className=" btn btn-danger my-4 mx-2" onClick={handleCapitalizedClick}>Capitalize Text</button>
            <button className=" btn btn-info my-4 mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
        </div>

        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length}Minutes to Read the Above Text</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Enter Text to Preview"}</p>
        </div>
        </>
  )
}
