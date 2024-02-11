import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import appStore from './utils/store'
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the screen width is less than or equal to 600px
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set initial state
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Provider store={appStore}>
      <div className="p-0 m-0 text-white bg-gradient-to-b from-slate-950 via-slate-950 to-black">
      {!isMobile && <Header />}
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
