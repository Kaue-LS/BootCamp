import Carrinho from './Pages/Cart/Carrinho';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login'
import Checkout from './Pages/Login/Checkout'
import Address from './Pages/Endereço/Endereço';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  ReadAllTires  from './Pages/ReadAll/ReadAllTires';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={ReadAllTires}></Route>
    <Route path="/cart" component={Carrinho}></Route>
    <Route path="/login"  component={Login}></Route>
    <Route path="/checkout"  component={Checkout}></Route>
    <Route path="/address"  component={Address}></Route>

    </Switch>
    <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;
