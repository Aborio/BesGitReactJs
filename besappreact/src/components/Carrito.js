import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexto } from './CartContext';

const Carrito = () => {
    const { carrito, cantidad_total, precio_total, vaciarCarrito, sacarCarrito } = useContext(contexto);

    return (
        <div>
            <h1>Carrito</h1>
            <h3>Cantidad productos:{cantidad_total}</h3>
            <h3>Precio total:{precio_total}</h3>
            <ul>
                {carrito.length > 0 ? (
                    <>
                        {carrito.map((item) => {
                            return (
                                <li key={item.id}>
                                    Descripcion: {item.descripcion}
                                    Cantidad: {item.cantidad}
                                    Precio Unitario: {item.precio}
                                    Precio Total: {item.precio * item.cantidad}
                                    <button onClick={() => sacarCarrito(item)}>X</button>
                                </li>
                            );
                        })}
                    </>
                ) : (
                    <p>No hay productos en el carrito</p>
                )}
            </ul>
            <button onClick={vaciarCarrito}>vaciar</button>
            <Link to='/chekout'>Comprar</Link>
        </div>
    );
};
export default Carrito;
