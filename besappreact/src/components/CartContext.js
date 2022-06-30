import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export const contexto = createContext();

export const Provider = contexto.Provider

const MiProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])

    
    // const addItemToCart = (product) =>{
    //     const inCart = carrito.find((productInCart) => productInCart.id === product.id);
    //     if(inCart){
    //         setCarrito(
    //             carrito.map((productInCart)=>{
    //                 if(productInCart.id === product.id){
    //                     return{...inCart, amount: inCart.amount + 1};
    //                 }else return productInCart;
    //             })
    //         );
    //     }else{
    //         setCarrito({...carrito,  ...product, amount: 1});
    //     }

    // }

    // const deleteItemToCart = (product) =>{
    //     const inCart = carrito.find((productInCart) => productInCart.id === product.id);

    //     if(inCart.amount === 1){
    //         setCarrito(
    //             carrito.filter(productInCart => productInCart.id !== product.id)
    //         )
    //     }else{
    //     if(inCart.amount === 1){
    //         setCarrito((productInCart) =>{
    //             if(productInCart.id === product.id){
    //                 return {...inCart, amount: inCart.amount - 1}
    //             }else return productInCart
    //         })
    //     }
    //     }
    // }

    const [cantidad_total, setCantidadTotal] = useState(0)
    const [precio_total, setPrecioTotal] = useState(0)

    const agregarCarrito = () => {
        setCarrito(carrito + 1)
        setCantidadTotal(cantidad_total + 1)
        setPrecioTotal(precio_total + 1)
    }

    const sacarCarrito = () => {
        setCarrito(carrito - 1)
    }

    const vaciarCarrito = () => {
        setCarrito()
        setCantidadTotal()
        setPrecioTotal()
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