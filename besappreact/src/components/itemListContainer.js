
import { useEffect, useState } from 'react';
import CustomFetch from '../utils/customFetch';
import productos from '../utils/productos';
import ItemList from './ItemList';
import {useParams} from "react-router-dom"


const ItemListCOntainer = ({greeting}) => {
    const [items,setItems] = useState([]);
    const resultado = useParams()
    

    useEffect(() => {
        CustomFetch(3000, productos)
        .then(resultado => setItems(resultado))
        
    }, [items]);

    
    const onAdd = () => {}
        return (
            <div>
                <ItemList productos={items}/>
                <h2>{greeting}</h2>
            </div>
        )
    }

    export default ItemListCOntainer;
