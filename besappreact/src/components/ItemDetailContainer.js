import traerProducto from "../utils/producto";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = () => {
    const [product,setProduct] = useState({});

    useEffect(() => {
        traerProducto()
        .then((resultado) =>{ setProduct(resultado);})
        
        .catch((error) => {console.log(error);
    });
        
    }, []);

    console.log(product);

    return (
    <div>
        <ItemDetail product={product}/>
    </div>)
};

export default ItemDetailContainer;