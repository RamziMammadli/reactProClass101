import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./api/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  
//sarmallamaq reduxu
  <Provider store={store}> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
