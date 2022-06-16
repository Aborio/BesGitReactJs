// import productos from "../utils/productos";



const ItemDetail = ({items}) => {

    return (
        <div>
            <h2>{items.name}</h2>
            <img src={items.image} alt={items.name} width="400"/>
            <p>{items.descripcion}</p>
        </div>
        
    
    )
}

export default ItemDetail;