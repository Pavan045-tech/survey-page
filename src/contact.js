import React from "react";
import { Link } from "react-router-dom";
import './next-page.css';
import './contact.css';
const Contact = () => {
    return(
        <div className="main3">
            <h2 className="heading3">Contact Details</h2>
            <h2 className="mail"><span>E-mail : </span><br></br><a className="a" href='https://mail.google.com'>Pavankumarsu045@gmail.com</a></h2>
            <h2 className="mobile"><span>Mobile : </span><br></br>+91 7026951511</h2>
            <div>
                <h2 className="office">Office Address :</h2>
                <h3>Shmbhunathapura village</h3>
                <h3>arkalagud Talluk</h3>
                <h3>Hassan District</h3>
            </div>
            <Link className="previous" to='/'>Previous</Link>
        </div>
    );
}
export default Contact;