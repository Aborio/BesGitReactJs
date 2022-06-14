
import ItemCount from './ItemCount';


const ItemListCOntainer = ({greeting}) => {
    const onAdd = () => {}
        return (
            <div>
                <h2>{greeting}</h2>
                <ItemCount stock={5} onAdd={onAdd} initial={0}/>
            </div>
        )
    }

    export default ItemListCOntainer;
