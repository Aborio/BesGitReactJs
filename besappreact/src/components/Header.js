import NavBar from "./NavBar"

const Header = (greeting) =>{

    alert(greeting.mensaje);

    return(
        <header>
        <h1>Bes Objetos</h1>
          <NavBar/>
        </header>

    )
}

export default Header