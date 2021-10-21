import { Route, Redirect } from "react-router-dom";
import { JwtHandler } from "./jwt-handler/JwtHandler";
// import useToken from "./Components/Api/useToken";
export default function RotaPrivada({ component: Component, ...rest }) {
  const auth = JwtHandler.isJwtValid();
  console.log(auth)
  return (
    <Route
      {...rest}
      render={(props) =>
        auth === true ? <Component {...props} /> : <Redirect to="/checkout" />
      }
    />
  );
}
