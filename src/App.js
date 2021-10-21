import Carrinho from './Pages/Cart/Carrinho';
import Login from './Pages/Login/Login'
import Checkout from './Pages/Login/Checkout'
import { BrowserRouter, Route, Switch} from "react-router-dom";
import  ReadAllTires  from './Pages/ReadAll/ReadAllTires';
import Footer from './Components/Footer/Footer';
import RotaPrivada from './RotaPrivada';
import Entrega from './Pages/Entrega/Entrega';
import Endereço from '../src/Pages/Endereço/Endereço'
import NotFound from './Components/NotFound/NotFound';
import Pagamento from './Pages/Pagamento/Pagamento'
import Resumo from './Pages/ResumoPagamento/Resumo';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Switch>
        <Route path="/" exact component={ReadAllTires}></Route>
        <Route path="/cart" component={Carrinho}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/checkout"   component={Checkout}></Route>
        <RotaPrivada path="/address" component={Endereço}/>
        <RotaPrivada path="/delivery" component={Entrega}/>
        <RotaPrivada path="/payment" component={Pagamento}/>
        <RotaPrivada path="/resume" component={Resumo}/>
      <Route component={NotFound}/>
        </Switch>
        </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

export default App;
