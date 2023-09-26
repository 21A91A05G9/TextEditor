import { useState } from "react"

function About(props){
    // const [mode,setMode] = useState('Dark Mode')
    // const [theme,setTheme] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const chageMode = () => {
    //     if(mode==='Dark Mode') {
    //         setMode('Light Mode')
    //         setTheme({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //     }
    //     else {
    //         setMode('Dark Mode')
    //         setTheme({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //     }
    // }
    return(
        <div className="container" >
             <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item" style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}}>
                <h1>About Us</h1>
                <p>
                The manual writing process on papers has turned into the usage of word processing software over the years. People are involved in writing tasks across many fields, and they have to prepare and edit files using software like MS Word, WordPad, etc. However, the problem people face with these programs is that they don’t come for free. They need to be installed on your device, and the device should be compatible enough to run them smoothly.
                </p>
                <h2 className="accordion-header">
                <button style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Uppercase
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Lowercase
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Camelcase
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Clear
                </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Copy
                </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Remove Extra Spaces
                </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Fonts
                </button>
                </h2>
                <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            </div>
            {/* <button type="button" className="btn btn-primary my-2" onClick={chageMode}>{mode}</button> */}
        </div>
    )
}
export default About