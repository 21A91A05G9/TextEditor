
import React from 'react'

export default function Calci() {
  const btnStyle ={
    borderRadius:'100%',
    margin:'5px',
    padding:'10px',
    boxShadow:'inset -1px -1px 8px black,1px 1px 6px  black',
    backgroundColor:'#cccccc',
    border:'none'
  }
  function click(num){
    console.log(num)
  }
  return (
    <div className='container pt-4' style={{height:'100vh',alignItems:'center' ,textAlign:'center'}}>
        <div className='container' style={{height:'470px', width:'270px',backgroundColor:'#333333',borderRadius:'15px'}}>
           <div className='' style={{backgroundColor:'#262626'}}>
                <input style={{boxShadow:'inset -2px -2px 10px white, inset 2px 2px 12px black',border:'none',backgroundColor:'#cccccc'}} className='m-4 p-2' type='text'/>
                <p>&nbsp;</p>
                <p>&nbsp;</p>

           </div>
           <div style={{display:'grid',gridTemplateColumns:'repeat(4,60px)'}}>
                
                    <button style={btnStyle} onClick={click(9)}>AC</button>
                    <button style={btnStyle} onClick={click(9)}>X</button>
                    <button style={btnStyle} onClick={click(9)}>%</button>
                    <button style={btnStyle} onClick={click(9)}>/</button>
                    <button style={btnStyle} onClick={click(9)}>7</button>
                    <button style={btnStyle} onClick={click(9)}>8</button>
                    <button style={btnStyle} onClick={click(9)}>9</button>
                    <button style={btnStyle} onClick={click(9)}>*</button>
                    <button style={btnStyle} onClick={click(9)}>6</button>
                    <button style={btnStyle} onClick={click(9)}>5</button>
                    <button style={btnStyle} onClick={click(9)}>4</button>
                    <button style={btnStyle} onClick={click(9)}>-</button>
                    <button style={btnStyle} onClick={click(9)}>3</button>
                    <button style={btnStyle} onClick={click(9)}>2</button>
                    <button style={btnStyle} onClick={click(9)}>1</button>
                    <button style={btnStyle} onClick={click(9)}>-</button>
                    <button style={btnStyle} onClick={click(9)}>.</button>
                    <button style={btnStyle} onClick={click(9)}>0</button>
                    <button style={btnStyle} onClick={click(9)}>=</button>
                   
                
           </div>
        </div>
    </div>
  )
}
