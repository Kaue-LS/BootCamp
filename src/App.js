import Carrinho from './Pages/Cart/Carrinho';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  ReadAllTires  from './Pages/ReadAll/ReadAllTires';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={ReadAllTires}></Route>
    <Route path="/cart" component={Carrinho}></Route>
    <Route path="/login"  component={Login}></Route>
    <Route path="/categorias/marcas/firestone"  component={ReadAllTires}></Route>

    </Switch>
    <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;
