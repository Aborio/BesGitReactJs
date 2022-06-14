import ItemCount from "./ItemCount";

const Item = ({id, name, image, stock}) => {
    return(
        <div key ={id}>
            <h1>{name}</h1>
            <img src={image} alt={id}/>
            <ItemCount stock = {stock}/>
        </div>

        
    )
}
export default Item;