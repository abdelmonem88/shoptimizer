import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import MenProducts from "./components/pages/men/MenProducts";
import WomenProducts from "./components/pages/women/WomenProducts";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";

function App() {
 return (
  <div>
   <BrowserRouter>
    <Switch>
     <Route path='/' exact component={Home} />
     <Route path='/men' component={MenProducts} />
     <Route path='/women' component={WomenProducts} />
     <Route path='/about' component={About} />
     <Route path='/contact' component={Contact} />
    </Switch>
   </BrowserRouter>
  </div>
 );
}

export default App;
