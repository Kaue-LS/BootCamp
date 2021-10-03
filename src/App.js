import Carrinho from './Pages/Cart/Carrinho';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Carrinho}></Route>
    <Route path="/login"  component={Login}></Route>

    </Switch>
    <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;
