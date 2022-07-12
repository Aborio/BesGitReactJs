
import {Link} from "react-router-dom"

const Item = ({id, name, image, stock, precio}) => {
    return(
        <div key ={id}>
            <h1>{name}</h1>
            <img src={image} alt={id}/>
            <p>Precio : ${precio}</p>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>

        
    )
}
export default Item;