import "./Menu.css"
import {BsFillPencilFill, BsImages, BsEnvelope} from "react-icons/bs"
import {HiOutlineUser, HiOutlineUserAdd} from "react-icons/hi"
import {MdOutlineVideoLibrary, MdOutlineOndemandVideo} from "react-icons/md"

function Menu () {
    return(
        <div className="contorno">
            <div className="perfil">
                <img src="https://pps.whatsapp.net/v/t61.24694-24/307221439_172302815452338_1825253643373935253_n.jpg?ccb=11-4&oh=01_AVzYY6J4NqSzOWG3wNnY2VO3gC3qZpZz0xjP6HtfGpEjXQ&oe=6354D07C"/>
                <h3>Arthur Gabriel</h3>
            </div>
            <h4 className="status">Status <BsFillPencilFill/></h4>
            <ul>
                <li className="disp">disponivel</li>
            </ul>

            <p>Qualquer coisaaa teste teste yakult miojo </p>

            <div className="opc">
                <p><HiOutlineUser/> Perfil</p>
                <p><BsImages/> Fotos</p>
                <p><MdOutlineVideoLibrary/> Videos</p>
                <p><MdOutlineOndemandVideo/> Videos</p>
                <p><BsEnvelope/> Recados</p>
                <p><HiOutlineUserAdd/> Add Amigo</p>
            </div>
            
            
        </div>
    )
}

export default Menu