import { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';

export const contexto = createContext();

export const Provider = contexto.Provider;

const MiProvider = ({ children }) => {
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
    const [carrito, setCarrito] = useState([]);
    const [cantidad_total, setCantidadTotal] = useState(0);
    const [precio_total, setPrecioTotal] = useState(0);

    const existeEnCarrito = (id) => {
        //si existe en el carrito me devuelve true
        return carrito.find((item) => item.id === id);
    };

    const agregarCarrito = (item) => {
        setCantidadTotal(cantidad_total + item.cantidad);
        setPrecioTotal(precio_total + item.precio * item.cantidad);

        if (existeEnCarrito(item.id)) {
            const nuevoCarrito = carrito.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + item.cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(nuevoCarrito);
        } else {
            setCarrito([...carrito, { ...item }]);
        }

        //spread operator ...
        //     const a ={id:1, cant:2, descripcion:"papepep"}
        //     const b = {...a ,  cant: a.cant + 5 }
        //    b ===  { id:1, cant:2, descripcion:"papepep"}
    };

    const sacarCarrito = (item) => {
        setCantidadTotal(cantidad_total - item.cantidad);
        setPrecioTotal(precio_total - item.precio * item.cantidad);

        const newCarrito = carrito.filter((prod) => prod.id !== item.id);
        setCarrito(newCarrito);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setPrecioTotal(0);
    };

    const valoresCarrito = {
        carrito, // es igual a carrito: carrito
        cantidad_total,
        precio_total,
        agregarCarrito,
        sacarCarrito,
        vaciarCarrito,
    };

    return <Provider value={valoresCarrito}>{children}</Provider>;
};

export default MiProvider;
