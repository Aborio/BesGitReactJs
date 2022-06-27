import { createContext } from "react";
import { useState } from "react";

export const contexto = createContext();

const Provider = contexto.Provider

const MiProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])
    const [cantidad_total, setCantidadTotal] = useState(0)
    const [precio_total, setPrecioTotal] = useState(0)

    const agregarCarrito = () => {
        setCarrito(carrito + 1)
    }

    const sacarCarrito = () => {
        setCarrito(carrito - 1)
    }

    const vaciarCarrito = () => {
        setCarrito()
    }

    const valoresCarrito ={
            carrito : carrito,
            cantidad_total: cantidad_total,
            precio_total: precio_total,
            agregarCarrito: agregarCarrito,
            sacarCarrito : sacarCarrito,
            vaciarCarrito : vaciarCarrito,


    }

    return(
        <Provider value={valoresCarrito}>
             {children}
        </Provider>
    )

}

export default MiProvider;