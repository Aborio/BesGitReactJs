import 'react-loading-skeleton/dist/skeleton.css';
import ItemDetailContainer from '../ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import ItemListCOntainer from '../ItemListContainer';
import Carrito from '../Carrito';
import Chekout from '../Chekout';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListCOntainer />} />
                <Route path='/category/:id' element={<ItemListCOntainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/carrito' element={<Carrito />} />
                <Route path='/chekout' element={<Chekout />} />
            </Routes>
        </main>
    );
};

export default Main;
