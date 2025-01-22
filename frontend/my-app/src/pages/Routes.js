import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;