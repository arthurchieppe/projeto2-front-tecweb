import React, { useEffect, useState } from "react";
import "./index.css";

export default function AppBar(props) {

    return (
      <div className="appBar">
        <img src="/weather-icon.png" className="logo" alt="logo"/>
        <h1 className="pageTitle">Weather App</h1>
        <button>Login</button>
      </div>
    );
  }