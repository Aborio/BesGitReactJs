
import { useEffect, useState } from 'react';
import {CustomFetch} from '../utils/customFetch';
import productos from '../utils/productos';
import ItemList from './ItemList';


const ItemListCOntainer = ({greeting}) => {
    const [items,setItems] = useState([]);
    

    useEffect(() => {
        CustomFetch(3000, productos)
        .then(resultado => setItems(resultado))
        
    }, [items]);

    

        return (
            <div>
                <ItemList productos={items}/>
                <h2>{greeting}</h2>
            </div>
        )
    }

    export default ItemListCOntainer;
