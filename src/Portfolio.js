import React from "react";
import './next-page.css';
import { Link } from "react-router-dom";

const Portfolio = () => {
    return(
        <div>
            <h1>This is Portfolio Page</h1>
            <h2>Portfolio will be updated soon</h2><h1>_</h1>
            <Link className="link" to="/">Previous</Link>
        </div>
    );
}

export default Portfolio;