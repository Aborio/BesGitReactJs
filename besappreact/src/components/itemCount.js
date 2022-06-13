import React, {Component, useState} from 'react';
const ItemCount = ({ stock, initial, onAdd }) => {
    stock = stock || 5;
    const [count, setCount] = useState(0);
    

    const aumentarContador = () => {
        if (count < stock) {
            setCount(count + 1);
            onAdd(count + 1);
        setCount(count + 1);}}

    const bajarContador = () => {
        if (count > 0) {
        setCount(count - 1);}}
    
    const confirmarContador = () => {
        alert("Se confirmaron " + count + " productos");
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
    