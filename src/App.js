import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
 return (
  <div>
   <BrowserRouter>
    <Switch>
     <Route path='/' exact component={Home} />
    </Switch>
   </BrowserRouter>
  </div>
 );
}

export default App;
