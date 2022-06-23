import React, {useState} from 'react';
const ItemCount = ({ stock, initial, onAdd }) => {
    stock = stock || 5;
    initial = initial || 1;
    const [count, setCount] = useState(1);
    

    const aumentarContador = () => {
        if (count < stock) {
            setCount(count + 1);
        setCount(count + 1);}}

    const bajarContador = () => {
        if (count > 0) {
        setCount(count - 1);}}
    
    const confirmarContador = () => {
       onAdd(count);
    }

    return (
        <div>
            <p>El stock es: {stock}</p>
            <p>el contador va : {count}</p>
            <button onClick={aumentarContador}>+</button>
            <button onClick={bajarContador}>-</button>
            <button onClick={confirmarContador}>Confirmar</button>
        </div>
    )
}

export default ItemCount;
    