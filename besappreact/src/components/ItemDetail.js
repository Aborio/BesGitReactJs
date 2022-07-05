// import productos from "../utils/productos";
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { contexto } from './CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ id, name, precio, descripcion, image }) => {
    const { agregarCarrito } = useContext(contexto);
    const [renderItemCount, setRenderItemCount] = useState(false);

<<<<<<< HEAD

const ItemDetail = ({name,precio,descripcion,image}) => {

    const context = useContext(contexto)

    const [count, setCount] = useState(false)

    const onAdd = (count) => {
        setCount(count)
        alert("se agrego "+ count + " productos")
        setCount(true);
    }

=======
    const onAdd = (cantidad) => {
        const newItem = { id, name, precio, descripcion, image, cantidad };
        agregarCarrito(newItem);
        setRenderItemCount(true);
        //alert('se agrego ' + count + ' productos');
    };
>>>>>>> 2bfe8e5bd7a2ff53e3e1986fb688b5285d12e5ec

    return (
        <div>
            <h2>Producto:{name}</h2>
            <h3>Precio: $ {precio}</h3>
            <img src={image} alt={name} width='400' />
            <p>{descripcion}</p>
            {renderItemCount ? (
                <>
                    <Link to='/Carrito'>Ir a carrito</Link>
                </>
            ) : (
                <ItemCount onAdd={onAdd} />
            )}
        </div>
    );
};

export default ItemDetail;
