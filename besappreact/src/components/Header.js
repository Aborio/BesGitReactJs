import NavBar from "./NavBar"
import ItemListCOntainer from "./ItemListContainer";

const Header = (greeting) =>{

    alert(greeting.mensaje);

    return(
        <header>
        <h1>Bes Objetos</h1>
          <NavBar/>
          <ItemListCOntainer/>
        </header>

    )
}

export default Header