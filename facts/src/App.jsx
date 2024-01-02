import Navbar from "./components/Navbar";
import Main from "./components/Main";
import React from "react";

const App = () => {
  const [dark, setDark] = React.useState(false);

  const toggleDarkMode = () => {
    setDark((prevDark) => !prevDark);
  };

  return (
    <div className="container">
      <Navbar darkMode={dark} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={dark} />
    </div>
  );
};

export default App;
