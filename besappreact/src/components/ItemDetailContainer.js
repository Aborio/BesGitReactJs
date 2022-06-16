import CustomFetch from "../utils/customFetch";
import productos from "../utils/productos";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = () => {
    const [items,setItems] = useState([]);

    useEffect(() => {
        CustomFetch(3000, productos)
        .then((resultado) =>{ setItems(resultado);})
        
        .catch((error) => {console.log(error);
    });
        
    }, [items]);

    return (
    <div>
        <ItemDetail items={items} />
    </div>)
};

export default ItemDetailContainer;