import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import appStore from './utils/store'
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {

  return (
    <Provider store={appStore}>
      <div className="p-0 m-0 text-white bg-gradient-to-b from-slate-950 via-slate-950 to-black">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
