
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Headers from "./components/header/Headers";
import Footer from "./components/footer/Footer";
import Home from "./page/home/Home";
import PageNotFound from "./page/pageNotFound/PageNotFound";
import DetailCharacter from "./components/detailCharacter/DetailCharacter";

function App() {
  return (
 
    <Router>
    <Headers/>
      <Switch>
        <Route exact  path="/" component={Home} />
        <Route  path="/detail/:id" component={DetailCharacter}/>
        <Route  path="*" component={PageNotFound} />
      </Switch>
    <Footer/>
    </Router>
 
 
  );
}

export default App;
