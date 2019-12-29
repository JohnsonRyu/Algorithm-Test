import React from "react";
import { Provider } from "mobx-react";

import { rootStore } from "./store";
import MarketPage from "./MarketPage";

const App = () => (
  <Provider {...rootStore}>
    <MarketPage />
  </Provider>
)

export default App