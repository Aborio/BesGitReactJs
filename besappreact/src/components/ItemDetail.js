// import productos from "../utils/productos";
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { contexto } from './CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ name, precio, descripcion, image }) => {
    const context = useContext(contexto);
    console.log(context);

    const [count, setCount] = useState(false);

    const onAdd = (count) => {
        setCount(count);
        alert('se agrego ' + count + ' productos');
        setCount(true);
    };

    return (
        <div>
            <h2>Producto:{name}</h2>
            <h3>Precio: $ {precio}</h3>
            <img src={image} alt={name} width='400' />
            <p>{descripcion}</p>
            {count ? (
                <>
                    <button onClick={() => context.agregarCarrito()}>confirmar</button>
                    <Link to='/Carrito'>Ir a carrito</Link>
                </>
            ) : (
                <ItemCount onAdd={onAdd} />
            )}
        </div>
    );
};

export default ItemDetail;
