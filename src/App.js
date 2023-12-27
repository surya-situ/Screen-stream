import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import appStore from './utils/store'
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  return (
    <Provider store={appStore}>
      <div className="bg-gradient-to-b from-blue-950 via-zinc-950  to-black text-white">
        <Header />
        <div className="pl-[130px]">
          <Outlet />
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
