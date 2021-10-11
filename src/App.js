import Carrinho from './Pages/Cart/Carrinho';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login'
import Checkout from './Pages/Login/Checkout'
import Address from './Pages/Endereço/Endereço';
import Entrega from './Pages/Entrega/Entrega';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  ReadAllTires  from './Pages/ReadAll/ReadAllTires';
import MenuMobile from './Components/MenuMobile/MenuMobile';
function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={ReadAllTires}></Route>
    <Route path="/cart" component={Carrinho}></Route>
    <Route path="/login"  component={Login}></Route>
    <Route path="/checkout"  component={Checkout}></Route>
    <Route path="/address"  component={Address}></Route>
    <Route path="/delivery"  component={Entrega}></Route>

    </Switch>
   
    <Footer></Footer>
    <MenuMobile></MenuMobile>
    </BrowserRouter>
  );
}

export default App;
