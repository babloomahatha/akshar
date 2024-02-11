import "./App.css";
// import About from "./components/About";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode Enabled";
      setInterval(() => {
        document.title = "2 Virus found";
      }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils-Light Mode Enabled";
      setInterval(() => {
        document.title = "Install TextUtils now";
      }, 1500);
    }
  };
  return (
    <>
      {/* <Navbar title="Akshar"/> */}
      {/* <Navbar/> */}
      {/* <Router> */}
      <Navbar title="Akshar" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route path="/about" element={<About/>}> </Route> */}
          <Textform showAlert={showAlert} heading="Enter the Text to Analyze Below" mode={mode}/>
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
