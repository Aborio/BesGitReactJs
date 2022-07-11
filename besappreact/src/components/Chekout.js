import React, { useContext } from 'react';
import { db } from "../firebase";
import { contexto } from './CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Chekout = () => {

    const {vaciarCarrito ,carrito,precio_total} = useContext(contexto)

    const buy = () =>{

        const collectionOrder = collection(db,"ordenes")
        console.log(collectionOrder)
        const orderData = {
            buyer :{
                name : document.getElementById("name").value,
                phone : document.getElementById("phone").value,
                email : document.getElementById("email").value
            },
            items : {carrito},
            date : serverTimestamp,
            total : precio_total
        }

        // const consulta = addDoc(collectionOrder, orderData)
        
  
        // addDoc(collectionOrder, orderData)
        // .then((resolve) =>{
        //     console.log(resolve);
        // })

        alert("Gracias por su compra " + orderData.buyer.name)
        vaciarCarrito();
        
    }



    return(     
    <div>
        <h1>Chekout</h1>
        <input type="text" id="name" placeholder='Coloque su nombre' ></input>
        <input type="text" id="phone" placeholder='Coloque su nombre'></input>
        <input type="text" id="email" placeholder='Coloque su nombre'></input>
        <button onClick={buy}>compra</button>
    </div>
    ) 
};

export default Chekout;
