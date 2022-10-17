import {Link} from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import {IoChatbubblesSharp} from "react-icons/io5";
import {FaUserAlt, FaUsers} from "react-icons/fa";
import {BiSearchAlt2} from "react-icons/bi"
import './Navbar.css'


function Navbar() {
    return(
        <div className='dois'>
            <ul className='social_list'>
                <li><a><BiSearchAlt2/></a></li>
                <li><Link to='/PubliPerfil'><FaUserAlt/></Link></li>
                <li><Link to='/Comun'><FaUsers/></Link></li>
                <li><a><IoChatbubblesSharp/></a></li>
                <li><Link to='/Publi'><AiFillHome/></Link></li>
                <Link to='/Login'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Logo_ORKUT.svg/2560px-Logo_ORKUT.svg.png' width={120}/></Link>
            </ul>
        </div>
    )
}

export default Navbar