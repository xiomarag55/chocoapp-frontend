

import 'bootstrap/dist/css/bootstrap.min.css';

import{ 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginForm from "./GestionDeIngreso/pages/login/Login"
import GestionDeProductos from "./AdministradorDeProductos/pages/GestionDeProductos"
import GestionDeVentas from "./AdministradorDeVentas/pages/GestionDeVentas"
import GestionDeUsuarios from "./GestionDeUsuarios/pages/GestionDeUsuarios"
import Header from './Shared/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <LoginForm />
        </Route>
        <Route path="/administradordeproductos" exact>
          <GestionDeProductos />
          </Route>
          <Route path="/administradordeventas" exact>
          <GestionDeVentas />
          </Route>
          <Route path="/gestiondeusuarios" exact>
          <GestionDeUsuarios />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;