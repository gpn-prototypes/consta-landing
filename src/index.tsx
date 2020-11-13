import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { context } from "@reatom/react";
import { store } from "./modules/app";

const Root: React.FC = () => {
  return (
    <context.Provider value={store}>
      <App />
    </context.Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
