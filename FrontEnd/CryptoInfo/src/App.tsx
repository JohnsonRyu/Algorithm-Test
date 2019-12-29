import React from "react";
import { Provider } from "mobx-react";
import { Route, BrowserRouter } from "react-router-dom";

import { MarketPage, OrderPage } from "./pages";
import { rootStore } from "./store";

const App = () => (
  <BrowserRouter>
    <Provider {...rootStore}>
      <Route exact path="/" component={MarketPage}/>
      <Route path="/order" component={OrderPage}/>
    </Provider>
  </BrowserRouter>
)

export default App