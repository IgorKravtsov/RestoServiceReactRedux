import React from 'react';
import spinner from "./spinner_.svg";
import "./spinner.scss";

const Spinner = () => {
    return (<div className="spinner">
        <img src={spinner} alt="loading..."/>
    </div>);
}

export default Spinner;