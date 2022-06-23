// import productos from "../utils/productos";

import ItemCount from "./ItemCount";



const ItemDetail = ({name,precio,descripcion,image}) => {

    const onAdd = (count) => {
        alert("se confirmaron "+ count + " productos")

    }


    return (
        <div>

            <h2>Producto:{name}</h2>
            <h3>Precio {precio}</h3>
            <img src={image} alt={name} width="400"/>
            <p>{descripcion}</p>
            <ItemCount onAdd={onAdd}/>
        </div>
        
    
    )
}

export default ItemDetail;