import React, { Component } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
