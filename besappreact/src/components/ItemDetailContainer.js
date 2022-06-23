// import traerProducto from "../utils/producto";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../utils/customFetch";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [product,setProduct] = useState({});
    const {id} = useParams()

    useEffect(() => {
        getProductById(parseInt(id))
        .then((resultado) =>{ setProduct(resultado);})
        
        .catch((error) => {console.log(error);
    });
    
    }, []);


    return (
    <div>
        <ItemDetail {...product}/>
    </div>)
};

export default ItemDetailContainer;