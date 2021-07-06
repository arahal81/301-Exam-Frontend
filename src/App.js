import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import Favorite from "./component/Favorite";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/fav" component={Favorite} />
      </Switch>
    </Router>
  );
}

export default App;
