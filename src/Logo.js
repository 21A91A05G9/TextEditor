import {Link} from "react-router-dom"
function Logo(props){
    return(
        <div className="container">
            <textarea  className="form-control my-4" placeholder="Write here..."  id="exampleFormControlTextarea1" rows="6" style={{ color:props.color ,backgroundColor:props.color==='white'?'black':'white',border:`2px solid ${props.color}`}}></textarea>
            <div style={{display:'flex', flexDirection:'row',textAlign:'center',alignItems: 'center'}}> <Link to='./Text'> <button type="button" className="btn btn-primary mx-1 my-2" >Get started ...!</button></Link></div>
        </div>
    )
}
export default Logo;