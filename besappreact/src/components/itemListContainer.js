import React, {useEffect, useState} from 'react';
import customFetch from '../utils/customFetch';
import Item from './Item';
import ItemCount from './itemCount';
import productos from '../utils/productos';

const ItemListCOntainer = ({greeting}) => {
    const [count, setItems] = useState([]);
    useEffect(() => {
        customFetch(3000 , productos)
        .then(resultado => setItems(resultado))
    }, [Item])
    const onAdd = () => {}
        return (
            <div>
                <item products={Item}/>
                <h2>{greeting}</h2>
                <ItemCount stock={5} onAdd={onAdd} initial={0}/>
            </div>
        )
    }

    export default ItemListCOntainer;
