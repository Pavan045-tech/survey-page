import React from "react";
import { Link } from "react-router-dom";
import "./Readmore.css";

const Readmore = () => {
    return(
        <div className="major">
       <div className="maiin4">
            <h1 className="about">About Page</h1>
           <h1 className="h111">N.Doddegowda Land Revenue services</h1>
           <p className="paraa3">Heartly Welcome to N.D Platform and This Platform was Created by N.D. Team members and The main Aim of this website 
               to Help the people who are struggling to get the documents and who are Struggling to View the documents and theese 
               documents are all authenticated by Govt of karnataka and this Website help to redirect to the Documents Official Website 
               only for view the Documents and If Someone was intrested or required to take the official documents and they can get the documents 
               by contact with Our Team Memebrs or you can directly contact to N.Dodde Gowda Who is out main Back bone of our Platform.  
           </p>
           <Link className="link2" to='/'>Previous Page</Link>
       </div></div>
    );
}
export default Readmore;