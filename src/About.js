
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
        <div className="container" style={{height:'100vh',textAlign: 'justify',
        textJustify: 'inter-word',color:props.color ,backgroundColor:props.color==='white'?'black':'white'}}  >
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
                <div className="accordion-body" style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}}>Uppercasing text involves converting all letters in the selected text to capital letters. This is often used for emphasis or to ensure uniformity in text. For example, if you have the text "The quick brown fox," selecting it and applying uppercase would result in "THE QUICK BROWN FOX."</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Lowercase
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-body">Lowercasing text is the opposite of uppercase. It converts all letters in the selected text to lowercase. For example, "HELLO" would become "hello." This is useful for standardizing text or making it more readable.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Camelcase
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-body">Camel case is a specific naming convention where compound words or phrases are written without spaces, and each word or abbreviation begins with a capital letter, except the first word which starts with a lowercase letter. For example, "text editor" becomes "textEditor."</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Clear
                </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-body">The clear action erases all content from the selected area, making it empty. This is useful when you want to start fresh or remove unwanted text quickly without deleting character by character.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Copy
                </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-body">Copying text allows you to duplicate selected content. After copying, you can paste it elsewhere in the document or in another application. It's a fundamental function for duplicating text without altering the original.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Remove Extra Spaces
                </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-body">Removing extra spaces involves deleting any additional white spaces within the selected text. This can include multiple consecutive spaces or leading/trailing spaces. For example, " Hello World " would become "Hello World" after removing extra spaces.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Fonts
                </button>
                </h2>
                <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white'}} className="accordion-body">Copying text allows you to duplicate selected content. After copying, you can paste it elsewhere in the document or in another application. It's a fundamental function for duplicating text without altering the original.</div>
                </div>
            </div>
            </div>
            {/* <button type="button" className="btn btn-primary my-2" onClick={chageMode}>{mode}</button> */}
        </div>
    )
}
export default About