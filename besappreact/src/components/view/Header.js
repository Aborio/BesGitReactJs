import NavBar from "../NavBar"
import {Link} from "react-router-dom"

const Header = (greeting) =>{

    alert(greeting.mensaje);

    return(
        <header>
        <Link to="/">
          <h1>Bes Objetos</h1>
        </Link>
          <NavBar/>
        </header>

    )
}

export default Header