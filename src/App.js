import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact.js";
import About from "./About.js";
import MyName from "./MyName.js";
import Other from "./Other.js";
import "./App.css";

class App extends React.Component {
  render() {
    const Name = () => {
      return <div>This is my page.</div>;
    };
    return (
      <>
        <div className="container">
          <Link to="/"  className="link-cls">Home </Link>
          <Link to="/about" className="link-cls1">About Us </Link>
          <Link to="/myname"  className="link-cls">MyName Page </Link>
          <Link to="/other" className="link-cls1">other </Link>
        </div>
   
          <Routes>
          <Route exact path="/" element={<Contact />} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/MyName" element={<MyName/>} />
          <Route exact path="/Other" element={<Other/>} />
          </Routes>
       
    
      </>
    );
  }
}
export default App;