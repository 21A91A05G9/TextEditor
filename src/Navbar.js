import {Link} from "react-router-dom"

function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'dark':'light'}`}>
        <div className="container-fluid" >
            <b><a className="navbar-brand"><span style={{color:' #66b3ff'}}>t</span>ext<span style={{color:' #66b3ff'}}>E</span>diting</a>
            <Link className="mx-2" style={{textDecoration:'none',color:props.mode==='light'?'white':'black' }}  to="./"> Home</Link> 
            <Link className="mx-2" style={{textDecoration:'none',color:props.mode==='light'?'white':'black' }} to="./About">About </Link> 
            <Link className="mx-2" style={{textDecoration:'none',color:props.mode==='light'?'white':'black' }}  to="./Contact"> Contact</Link> </b>
            <form className="d-flex" role="search">
                
                <div className={`form-check form-switch text-${props.mode}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label"   htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'dark':'light'} </label>
                </div>  
            </form>
        </div>
        </nav>
    )
}
export default Navbar;