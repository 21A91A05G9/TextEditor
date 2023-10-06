import {Link} from "react-router-dom"
import myImage from './text4.jpg';
function Logo(props){
    return(
        <div className="container ">
            <div className="row " style={{alignItems:'center',textAlign: "justify"}}>
                <div className="col-md-6 col-xl-6 col-sm-6 col-lg-6 xs-6 "> <img className="image-fluid " src={myImage} style={{ width:'100%',height:'80%', borderTopLeftRadius: '10000px', borderBottomRightRadius: '5000px', borderBottomLeftRadius: '3000px',borderTopRightRadius:'10000px',alignItems:'center'}} alt="textImage" />
             </div>
            <div className="col-md-6 col-xl-6 col-sm-6 col-lg-6 xs-6 p-5">
                <div class="card" style={{backgroundColor:props.color==='white'?'#cce0ff':'#003366',color:props.color==='white'?'black':'white',boxShadow:`1px 1px 7px 1px ${props.color==='white'?'black':'white'}`}}>
                <div class="card-body">
                    <h5 class="card-title">Text Editor...</h5>
                    <p class="card-text">Certainly! Most modern text editors, including popular ones like Visual Studio Code and Sublime Text, are designed to be user-friendly and offer a range of features for editing text and making it more readable.</p>
                    <Link to="./Text" class="btn btn-primary">Get started</Link>
                </div>
                </div>
            </div>
         </div>
        </div>
        
        
             
    )
}
export default Logo;