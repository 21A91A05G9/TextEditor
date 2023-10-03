import React,{ useState } from "react";

function Text(props){
    const [text,setText] = useState("");
    const [font,setFont] = useState("");
    const toUpper = () => {
        setText(text.toUpperCase())
    }
    const toLower = () => {
        setText(text.toLowerCase())
    }
    const clear = () => {
        setText('')
    }
    const copy = () =>{
        var newText= document.getElementById('exampleFormControlTextarea1')
        newText.select()
        navigator.clipboard.writeText(newText.value)
    }
    const removeExtraSpaces = () => {
        var newText= text.split(/[' ']+/)
        console.log(newText)
        setText(newText.join(" "))

    }
    const change = (e) => {
        setText(e.target.value)
    } 

    const camelCase = () => {
        var words= text.split(/[' ']+/)
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
          }
       
        setText(words.join(' '))
    }
    
    const fontStyle1 = () =>{
       setFont("Open Sans, sans-serif");
    }
    const fontStyle2 = () =>{
        setFont("bold");
    }
    const fontStyle3 = () =>{
        setFont("Courier New, monospace");
    }
    const fontStyle4 = () =>{
        setFont("Arial, sans-serif");
     }
     const fontStyle5 = () =>{
         setFont("Times New Roman, serif");
     }
     const fontStyle6 = () =>{
         setFont("Georgia, serif");
     }
    return (
        
       <div className="container" style={{height:'100vh'}}>
             <form>
            <div className="mb-3 container">
            <h2 className="my-4">Enter text to edit...!</h2>
            <textarea  className="form-control my-4" placeholder="Write here..." style={{ color:props.color==='white'?'black':'white' ,backgroundColor:props.color==='white'?'white':'black' , fontFamily:font ,border:`2px solid ${props.color}`, boxShadow:'1px 1px 8px 1px gray'}}  value={text} onChange={change} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1 my-2" onClick={toUpper}>ToUpperCase</button>
            <button type="button" className="btn btn-primary mx-1 my-2" onClick={toLower}>ToLowerCase</button>
            <button type="button" className="btn btn-primary mx-1 my-2" onClick={clear}>Clear</button>
            <button type="button" className="btn btn-primary mx-1 my-2" onClick={copy}>Copy</button>
          
            <button type="button" className="btn btn-primary mx-1 my-2" onClick={camelCase}>Camel Case</button>
            <button type="button" className="btn btn-primary mx-1 my-2" onClick={removeExtraSpaces}>RemoveExtraSpaces</button>
            <div className="btn-group dropend">
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Fonts
            </button>
            <ul className="dropdown-menu" style={{ color:props.color ,backgroundColor:'transparent', fontFamily:font}} >
            <button type="button" style={{width:'100%' }} className="btn btn-primary mx-1 my-2" onClick={fontStyle1}>Open Sans</button>
            <button type="button" style={{width:'100%' }} className="btn btn-primary mx-1 my-2" onClick={fontStyle2}>Bold</button>
            <button type="button" style={{width:'100%' }} className="btn btn-primary mx-1 my-2" onClick={fontStyle3}>Courier New</button>
            <button type="button" style={{width:'100%' }} className="btn btn-primary mx-1 my-2" onClick={fontStyle4}>Arial</button>
            <button type="button" style={{width:'100%' }} className="btn btn-primary mx-1 my-2" onClick={fontStyle5}>Times New Roman</button>
            <button type="button" style={{width:'100%' }} className="btn btn-primary mx-1 my-2" onClick={fontStyle6}>Georgia</button>
            </ul>
            </div>
            {/* <input type="color" onChange={props.changeColor} className="btn  mx-2 form-control form-control-color" id="exampleColorInput" ></input>  */}

            
            </form>
            <p className="my-4">word count: {Math.min(text.length,text.split(' ').length)} |  character count: {text.length}</p>
            <h3>Preview</h3>
            <p>{text}</p>
       </div>
       
    )
}
export default Text;