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
                            return (<ul>
                                <li key={item.id}>
                                    <li>Nombre: {item.name}</li>
                                    <li>Cantidad: {item.cantidad}</li>
                                    <li>Precio Unitario: {item.precio}</li></li>
                                    <li>Precio Total: {item.precio * item.cantidad}
                                    <button onClick={() => sacarCarrito(item)}>X</button>
                                </li>
                                </ul>
                            );
                        })}
                    </>
                ) : (
                    <p>No hay productos en el carrito</p>
                )}
            </ul>
            <button onClick={vaciarCarrito}>vaciar</button>
            <Link to='/Chekout'>Comprar</Link>
        </div>
    );
};
export default Carrito;
