
import React from 'react'
import { useState } from 'react'


export default function Calci(props) {
  const btnStyle ={
    borderRadius:'5%',
    margin:'5px',
    padding:'10px',
    boxShadow:'inset -1px -1px 8px black,1px 1px 3px  black',
    backgroundColor:'white',
    border:'none'
  }
  const [exp,setExp] = useState("")
  const [value,setValue] = useState("0")
  const evaluate = (event) => {
        
        setValue(eval(exp))
  }
  const click = (event) => {
    setExp(exp+event.target.value)
    console.log(exp)
  }
  const clear = () => {
    setExp("")
    setValue("0")
  }
  return (
    <div className='container pt-4' style={{height:'100vh',alignItems:'center' ,textAlign:'center'}}>
        <div className='container p-3' style={{height:'480px', width:'270px',backgroundColor:props.color==="white"?'#cce0ff':"#003366",borderRadius:'15px',boxShadow:'inset -2px -2px 4px white, inset 2px 2px 4px white, 2px 2px 4px gray,-2px -2px 4px gray'}}>
           <div  style={{backgroundColor:'#595959',color:'white',borderRadius:'10px',height:'140px'}}>
                <p style={{fontSize:'40px',textAlign:'right',paddingRight:'20px',color:'white'}}> {value} </p>
                <p style={{color:'white',textAlign:'right',paddingRight:'20px'}}>{exp}</p>
                <p>&nbsp;</p>
           </div>
           <br/>
           <div style={{display:'grid',gridTemplateColumns:'repeat(4,60px)'}}>
                    <button style={btnStyle} value=""  onClick={clear}>AC</button>
                    <button style={btnStyle} value=""  onClick={click}></button>
                    <button style={btnStyle} value="%"  onClick={click}>%</button>
                    <button style={btnStyle} value="/"  onClick={click}>/</button>
                    <button style={btnStyle} value="7"  onClick={click}>7</button>
                    <button style={btnStyle} value="8"  onClick={click}>8</button>
                    <button style={btnStyle} value="9"  onClick={click}>9</button>
                    <button style={btnStyle} value="*"  onClick={click}>*</button>
                    <button style={btnStyle} value="6"  onClick={click}>6</button>
                    <button style={btnStyle} value="5"  onClick={click}>5</button>
                    <button style={btnStyle} value="4"  onClick={click}>4</button>
                    <button style={btnStyle} value="-"  onClick={click}>-</button>
                    <button style={btnStyle} value="3"  onClick={click}>3</button>
                    <button style={btnStyle} value="2"  onClick={click}>2</button>
                    <button style={btnStyle} value="1"  onClick={click}>1</button>
                    <button style={btnStyle} value="+"  onClick={click}>+</button>
                    <button style={btnStyle} value="."  onClick={click}>.</button>
                    <button style={btnStyle} value="0"  onClick={click}>0</button>
                    <button style={btnStyle}  onClick={evaluate}>=</button>
           </div>
        </div>
    </div>
  )
}
