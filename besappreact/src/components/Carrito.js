import { useContext } from "react";
import {Link} from "react-router-dom"
import { contexto } from "./CartContext";


const Carrito = () =>{

    const {carrito} = useContext(contexto)
    const {cantidad_total} = useContext(contexto)
    const {precio_total} = useContext(contexto)
    const {vaciarCarrito} = useContext(contexto)
    

    return(
        <div>
        <h1>Carrito</h1>
        <h3>Cantidad productos:{carrito}</h3>
        <h3>Cantidad productos:{cantidad_total}</h3>
        <h3>Precio total:{precio_total}</h3>
        <button onClick={vaciarCarrito}>vaciar</button>
        <Link to="/chekout">Comprar</Link>

        </div>
    )


}
export default Carrito;