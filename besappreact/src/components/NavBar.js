import CartWidget from "./CartWidget"

const NavBar = () =>{
    return (
    <nav className="justify-content-end navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
                <a className="navbar-brand">Menu</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">link</a>
                    </li>

                </ul>
            </div>
        </div>
    <CartWidget/>
    </nav>

    )
}

export default NavBar