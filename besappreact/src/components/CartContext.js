import { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';

export const contexto = createContext();

export const Provider = contexto.Provider;

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [cantidad_total, setCantidadTotal] = useState(0);
    const [precio_total, setPrecioTotal] = useState(0);

    const existeEnCarrito = (id) => {
        
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
        carrito, 
        cantidad_total,
        precio_total,
        agregarCarrito,
        sacarCarrito,
        vaciarCarrito,
    };

    return <Provider value={valoresCarrito}>{children}</Provider>;
};

export default MiProvider;
