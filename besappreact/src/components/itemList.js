import Item from "./Item";
const itemList = ({productos}) => {
    return(
        productos.map(p =>
            <Item  
            id={p.id}
            name={p.name}
            image={p.image}
            key = {p.id}
            />
        )
    )
}

export default itemList;