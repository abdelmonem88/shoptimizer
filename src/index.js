import reactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { Auth0Provider } from "@auth0/auth0-react";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


reactDOM.render(
 <Auth0Provider
  domain='dev-n5phprrp.us.auth0.com'
  clientId='OmPDsVCwNIHYxotALwK9Brn77kbvnqMo'
  redirectUri={window.location.origin}
 >
  <Provider store={store}>
   <App />
  </Provider>
 </Auth0Provider>,
 document.getElementById("root")
);
