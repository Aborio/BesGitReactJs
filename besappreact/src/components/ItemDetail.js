// import productos from "../utils/productos";



const ItemDetail = ({product}) => {

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} width="400"/>
            <p>{product.descripcion}</p>
        </div>
        
    
    )
}

export default ItemDetail;