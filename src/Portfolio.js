import React from "react";
import './next-page.css';
import { Link } from "react-router-dom";

const Portfolio = () => {
    return(
        <div className="main">
            <h1>This is Portfolio Page</h1>
            <h2>Portfolio will be updated soon</h2>
            <Link className="link" to="/">Previous</Link>
        </div>
    );
}

export default Portfolio;