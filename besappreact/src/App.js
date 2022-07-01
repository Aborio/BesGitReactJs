import Header from './components/view/Header';
import Main from './components/view/Main';
import { BrowserRouter } from 'react-router-dom';
import MiProvider from './components/CartContext';

function App() {
    return (
        <>
            <BrowserRouter>
                <MiProvider>
                    <Header mensaje='Bienvenido!' />
                    <Main />
                </MiProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
