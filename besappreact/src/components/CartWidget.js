import { useContext } from "react"
import {Link} from "react-router-dom"
import { contexto } from "./CartContext"


const CartWidget = () => {

   let resultado =  useContext(contexto);

    return(
        <>
        <Link to="/Carrito" className="nav-link">Carrito {resultado.cantidad_total}</Link>
        <span className="material-symbols-outlined">
            shopping_cart_checkout
        </span>
        </>
    )
}

export default CartWidget