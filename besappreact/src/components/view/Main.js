import ItemDetailContainer from "../ItemDetailContainer"
import {Routes, Route} from "react-router-dom"
import ItemListCOntainer from "../ItemListContainer"

const Main = () =>{


    return(
        <main>
        <Routes>
            <Route path="/" element={<ItemListCOntainer/>}/>
            <Route path="/category/:id" element={<ItemListCOntainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
        </main>

    )
}

export default Main;