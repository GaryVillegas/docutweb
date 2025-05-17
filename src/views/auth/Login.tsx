//import React from "react";
import josmi from "./login.module.css";
import imageLogo from "./../../assets/docutlogo.svg";
import imageMockup from "./../../assets/mockupDocut.svg";

export const Login = () => {
  return (
    <div>
      login
      <button>Hola!</button>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageLogo} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">This is some text within a card body.</div>
      </div>
    </div>
  );
};
