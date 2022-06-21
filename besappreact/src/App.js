import Header from "./components/view/Header";
import {useState} from "react";
import Main from "./components/view/Main";
import {BrowserRouter} from "react-router-dom"





function App (){

    useState()
    return (
    
    <>
      <BrowserRouter>
      <Header mensaje = "Bienvenido!" />
      <Main/>
      </BrowserRouter>
    
    
    </>
    )
  }

  export default App