import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import "./index.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Search from "./components/Search";
import ContributeForm from "./components/ContributeForm";

function App() {
  return (
    <>
      <NavBar />
      <div className="home-page">
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/contribute" component={ContributeForm} />
          <Route path="/" exact component={Homepage} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </>
  );
}

export default App;
