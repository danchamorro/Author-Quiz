import React, { Component } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Turn from "./components/Turn";

class App extends Component {
  state = {
    author: {
      name: "Mark Twain",
      imageUrl: "images/authors/marktwain.jpg",
      imageSource: "Wikimedia Commons",
      books: ["The Adventures of Huckleberry Finn"]
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
