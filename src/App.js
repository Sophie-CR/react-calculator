import React from "react";
import Logo from "./Logo";
import Calculator from "./Calculator";
import Description from "./Description";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <Logo />
      <div className="row">
        <div className="col-lg-6">
          <Calculator />
        </div>
        <div className="col-lg-6">
          <Description />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
