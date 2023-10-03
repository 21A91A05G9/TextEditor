import {Link} from "react-router-dom"

function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode}`} style={{backgroundColor:`${props.color==='white'?'#cce0ff':'#003366'}`}}>
        <div className="container-fluid" >
            <b className="navbar-brand"><span style={{color:' #00a3cc'}}>t</span>ext<span style={{color:" #00a3cc"}}>E</span>diting</b>
            <br/>
            <b >
            <Link className="mx-2" style={{textDecoration:'none',color:props.mode==='light'?'black':'white' }}  to="./"> Home</Link> 
            <Link className="mx-2" style={{textDecoration:'none',color:props.mode==='light'?'black':'white' }} to="./About">About </Link> 
            <Link className="mx-2" style={{textDecoration:'none',color:props.mode==='light'?'black':'white' }}  to="./Contact"> Contact</Link> </b>
            <form className="d-flex" role="search">
                
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'dark':'light'} </label>
                </div>  
            </form>
        </div>
        </nav>
    )
}
export default Navbar;