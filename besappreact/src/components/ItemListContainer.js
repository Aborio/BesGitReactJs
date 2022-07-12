
import { useEffect, useState } from 'react';
import {CustomFetch} from '../utils/customFetch';
import ItemList from './ItemList';
import {db} from "../firebase";
import { collection, getDocs } from 'firebase/firestore';


const ItemListCOntainer = ({greeting}) => {
    const [items,setItems] = useState([]);
    

    const collectionProductos = collection(db,"Productos")
    const consulta = getDocs(collectionProductos)

    useEffect(() => {
        CustomFetch(100, consulta)
        .then((resultado) => {
            const prod_map = resultado.docs.map(referencia=>{
                const aux = referencia.data()
                aux.id = referencia.id
                return aux})

            setItems(prod_map);
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }, [items]);

    

        return (
            <div>
                <ItemList productos={items}/>
                <h2>{greeting}</h2>
            </div>
        )
    }

    export default ItemListCOntainer;
