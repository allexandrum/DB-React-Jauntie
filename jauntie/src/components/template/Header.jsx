import '../layouts/css/header.css'
import logo from '../layouts/img/logo_name.png'
import { Link } from "react-router-dom";
export default function Header(){
    return <>
        <hr id="header-hr"/>     
        <header className="header-logo-nav">
            <Link to="/"> <img id="logo-name" src={logo} alt="Jauntie Logo"/></Link>

        <nav>
            <Link to="/TourismE">Turism Extern</Link>
            <Link to="/TourismI">Turism Intern</Link>
            <Link to="Gallery">Galerie</Link>
            <Link to="About">Despre Noi</Link>
            <Link to="Account">Sign up</Link>
        </nav>
    </header>
    </>
}