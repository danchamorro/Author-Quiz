import React, { Component } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Turn from "./components/Turn";
import "./App.css";

class App extends Component {
  state = {
    author: {
      name: "Mark Twain",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/ee/Mark_Twain_photo_portrait%2C_Feb_7%2C_1871%2C_cropped_Repair.jpg",
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
