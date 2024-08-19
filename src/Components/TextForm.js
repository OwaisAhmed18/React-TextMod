import React,{useState} from 'react'
export default function TextForm(props) {

//Uppercase    
const handleUpClick = ()=>{
let newText = text.toUpperCase();
setText(newText);
if (text.length>0){
    props.showAlert("Text converted to uppercase!","success")
}
else{
    props.showAlert("No text entered!","danger")
}
}

//Lowercase
const handleLoClick = ()=>{
let newText = text.toLowerCase();
setText(newText);
if (text.length>0){
    props.showAlert("Text converted to lowercase!","success")
}
else{
    props.showAlert("No text entered!","danger")
}
}

//Clear text
const handleClearClick = ()=>{
let newText = "";
setText(newText);
if (text.length>0){
    props.showAlert("Text cleared!","success")
}
else{
    props.showAlert("No text entered!","danger")
}
}

//Copy text
const handleCopy = ()=>{
let newtext = document.getElementById("mybox");
newtext.select();
navigator.clipboard.writeText(newtext.value);
if (text.length>0){
    props.showAlert("Text copied to clipboard!","light")
}
else{
    props.showAlert("No text to copy!","danger")
}
}

//Extra spaces
const handleExtraSpaces = ()=>{
let newtext = text.split(/[ ]+/);
setText(newtext.join(" "));
if (text.length>0){
    props.showAlert("Extra spaces removed!","success")
}
else{
    props.showAlert("No text entered!","danger")
}
}      

const handleOnChange=(event)=>{
setText(event.target.value);
}

const [text, setText] = useState("")


return (
<>
{document.title = "TextMod - Home"}
<div className="container">
<h1>{props.heading}</h1>
<div className="mb-2">
<textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary m-1" onClick={handleLoClick}>Convert to lowercase</button>
<button className="btn btn-primary m-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-danger m-1" onClick={handleClearClick}>Clear Text</button>
</div>

<div className="container my-3" >
<h1>Your Text Summary</h1>
<p>{text.split(" ").length-1} words and {text.length} characters</p>
<p>{0.008*text.split(" ").length} Minutes to read</p>
<h2>Preview</h2>
<p>{text}</p>
</div>
</>
)
}
