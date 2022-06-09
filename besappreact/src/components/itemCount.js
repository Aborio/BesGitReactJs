import React, {Component, useState} from 'react';
const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(0);

    const aumentarContador = () => {
        setCount(count + 1);}

    const bajarContador = () => {
        setCount(count - 1);}
    
    const confirmarContador = () => {
    }

    return (
        <div>
            <p>el contador va : {count}</p>
            <button onClick={aumentarContador}>+</button>
            <button onClick={bajarContador}>-</button>
            <button onClick={confirmarContador}>Confirmar</button>
        </div>
    )
}

export default ItemCount;
    