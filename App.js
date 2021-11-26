import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import App from "./src/Pages/SplashScreen";

export default ReduxLaunch = () => {
  return(
  <Provider store={store}>
    <App />
  </Provider>
  );
}