import React, { useEffect, useState } from "react";
import "./index.css";


export default function City(props) {

    return(
        <div className="City">
            <h1>{props.name}</h1>
            <div className="details">
                {props.children}
            </div>
        </div>
    );
}