import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className='justify-content-end navbar navbar-expand-lg bg-light'>
            <div className='container-fluid'>
                <a className='navbar-brand'>Menu</a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='category/Productos1' className='nav-link' aria-current='page'>
                                Productos1
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='category/Productos2' className='nav-link'>
                                Productos2
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='category/Productos3' className='nav-link'>
                                Productos3
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
