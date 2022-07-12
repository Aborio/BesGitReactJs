
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {db} from "../firebase";
import { collection, getDoc, doc } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [product,setProduct] = useState({});
    const {id} = useParams()

    const collectionProductos = collection(db,"Productos")
    

    useEffect(() => {
        const ref = doc(collectionProductos, id);
        getDoc(ref)
        .then((resultado) =>{ setProduct({
            id : resultado.id,
            ...resultado.data(),
            })
        })
        
        .catch((error) => {console.log(error);
    });
    
    }, [id]);


    return (
    <div>
        <ItemDetail {...product}/>
    </div>)
};

export default ItemDetailContainer;