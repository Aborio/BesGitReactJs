import { useContext } from "react";
import {Link} from "react-router-dom"
import { contexto } from "./CartContext";


const Carrito = () =>{

    const {carrito} = useContext(contexto)

    return(
        <div>
        <h1>Carrito</h1>
        <Link to="/chekout">Comprar</Link>

        </div>
    )


}
export default Carrito;