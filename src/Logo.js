import {Link} from "react-router-dom"
import myImage from './textedit.jpg';
function Logo(props){
    return(
        <div className="container ">
            <div className="row " style={{height:'100vh',alignItems:'center'}}>
                
                <div className="col-md-6 col-xl-6 col-sm-10 col-lg-6 xs-10 p-5"> <img className="image-fluid " src={myImage} style={{ width:'100%',height:'80%', borderTopLeftRadius: '5000px', borderBottomRightRadius: '5000px', borderBottomLeftRadius: '1700px',borderTopRightRadius:'1700px',alignItems:'center'}} alt="textImage" />
             </div>

            <div className="col-md-6 col-xl-6 col-sm-10 col-lg-6 xs-10 p-5">
                <div class="card">
                {/* <div class="card-header">
                    Featured
                </div> */}
                <div class="card-body">
                    <h5 class="card-title">Text Editor...</h5>
                    <p class="card-text">Certainly! Most modern text editors, including popular ones like Visual Studio Code and Sublime Text, are designed to be user-friendly and offer a range of features for editing text and making it more readable.</p>
                    <Link to="./Text" class="btn btn-primary">Get started</Link>
                </div>
                </div>
            </div>

{/*                 
                <div className="container col-md-5  col-lg-4 col-xl-3 col-sm-10 col-xs-10" style={{boxShadow:'1px 1px 5px 1px gray',borderRadius:'10px',height: 'fit-content'}}>
                <div style={{textAlign: 'justify',textJustify: 'inter-word',alignItems:'center',height:'fit-content'}} ><p>Certainly! Most modern text editors, including popular ones like Visual Studio Code and Sublime Text, are designed to be user-friendly and offer a range of features for editing text and making it more readable. </p> </div>  <div style={{textAlign:'center'}}><Link to='./Text'><button type="button" className="btn btn-primary mx-1 my-2" >Get started ...!</button></Link></div>  </div>  */}
            </div>
        </div>
             
    )
}
export default Logo;