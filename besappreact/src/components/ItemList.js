import Item from "./Item";
const ItemList = ({productos}) =>{
    return(
        productos.map(p => 
            <Item 
            id={p.id}
            name={p.name}
            image={p.image}
            key={p.id}
            stock={p.stock}   
            />)
            )
        
}
export default ItemList;