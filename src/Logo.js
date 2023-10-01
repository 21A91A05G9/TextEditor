import {Link} from "react-router-dom"
import myImage from './textedit.jpg';
function Logo(props){
    return(
        <div className="container" style={{height:'100vh',paddingTop:'2rem',textAlign:'center'}}>
                <div className="row container   ">
                    <div className="col-md-2 col-offset-md-3  col-xl-2 col-sm-2 col-lg-2 "></div>
                    <div className="col-md-3 col-xl-3 col-sm-2 col-lg-3">
                    <img className="my-3" src={myImage} style={{height:'10rem', width:'16rem', borderTopLeftRadius: '5000px', borderBottomRightRadius: '5000px', borderBottomLeftRadius: '1700px',borderTopRightRadius:'1700px'}} alt="textImage" /> 
                    </div>
                    <div className="col-md-2 col-offset-md-2  col-xl-1 col-sm-1 col-lg-1 "></div>
                    <div className="container col-md-4 mt-3 col-lg-4 col-xl-4 col-sm-2" style={{textAlign: 'justify',
    textJustify: 'inter-word'}} ><p>Certainly! Most modern text editors, including popular ones like Visual Studio Code and Sublime Text, are designed to be user-friendly and offer a range of features for editing text and making it more readable. </p> <Link to='./Text'>  <button type="button" className="btn btn-primary mx-1 my-2" >Get started ...!</button></Link></div>  
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