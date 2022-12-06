import { Component} from '.'
import { Link} from "react-router-dom"

function App() {


  return (
    <Component className="App">
      <h1>ToDo Interativo</h1>
      <h4>Lista de Tarefas</h4>
      
      <Link to ='/principal'><button>Iniciar</button></Link>
      <img src="https://cdn-icons-png.flaticon.com/512/107/107979.png"></img>
    </Component>
  )
}

export default App
