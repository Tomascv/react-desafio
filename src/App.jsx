import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Cards from "./components/cards";

function App() {
  return (
    <><div className="App">
      <NavBar /> 
      <h4 className="title">Bienvenido</h4>
    </div>
    <div>
<Cards/> <Cards/>
    </div></>
  );
}

export default App;
