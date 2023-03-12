import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

const KEY_IS_LOGGED_IN = "isLoggedIn";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginInfo = localStorage.getItem(KEY_IS_LOGGED_IN);

    if (storedLoginInfo === "1") {
      setIsLoggedIn(true)
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem(KEY_IS_LOGGED_IN, "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem(KEY_IS_LOGGED_IN);
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
