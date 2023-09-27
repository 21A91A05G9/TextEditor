import {Link} from "react-router-dom"
import myImage from './textedit.jpg';
function Logo(props){
    return(
        <div className="container "  >
                <div className="row container my-3">
                    <div className="col-md-4">
                    <img className="my-3" src={myImage} style={{height:'10rem', width:'16rem', borderTopLeftRadius: '1200px', borderBottomRightRadius: '950px', borderBottomLeftRadius: '400px',borderTopRightRadius:'700px'}} alt="My Image" /> 
                    </div>
                <div className="container col-md-5 my-3" style={{justifyItems:'center'}} ><p>Certainly! Most modern text editors, including popular ones like Visual Studio Code and Sublime Text, are designed to be user-friendly and offer a range of features for editing text and making it more readable. </p> <Link to='./Text'>  <button type="button" className="btn btn-primary mx-1 my-2" >Get started ...!</button></Link></div>  
                </div>
        </div>
             
        // <div className="container row">
          
        //     <div className="container my-2" style={{display:'flex', flexDirection:'row',alignItems: 'center',justifyContent:'space-evenly' }}>  <img className="col-md-5" src={myImage} height={300} width={400} style={{    borderTopLeftRadius: '1200px', borderBottomRightRadius: '950px', borderBottomLeftRadius: '400px',borderTopRightRadius:'700px'}} alt="My Image" /> 
        //     <div className="container col-md-5" style={{width:'50%'}}><p>Certainly! Most modern text editors, including popular ones like Visual Studio Code and Sublime Text, are designed to be user-friendly and offer a range of features for editing text and making it more readable. </p>
        //     <Link to='./Text'>  <button type="button" className="btn btn-primary mx-1 my-2" >Get started ...!</button></Link></div>  </div>
        // </div>
    )
}
export default Logo;