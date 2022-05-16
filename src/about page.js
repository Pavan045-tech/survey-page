import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './next-page.css';

const About = () => {
    const {data}=useParams();
    return(
        <div>
            <h1>This is About page {data}</h1>
            <h1>Our main back bone of this Platform is Mr. N.Doddegowda</h1>
            <Link to='/'>Previous</Link>
        </div>
    );
}

export default About;