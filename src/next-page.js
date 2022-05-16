import React from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import './next-page.css';

const Next = () => {

    const {data,name} = useParams();

    if (String(data)=="RTC view") {
        return(
                <div className="main">
                    <h1 className="logo">▒­░⡷⠂<span><Link to='/'> N.D </Link></span>⠐⢾░▒</h1>
                    <h1><span>Hi 🙋🏼‍♂️ {name}</span></h1>
                    <h1 className="h1">Plaese Click on the Button to View RTC</h1>
                    <button><a className="color" href="https://landrecords.karnataka.gov.in/service2/RTC.aspx">Click Here</a></button>
                    <Link className="link" to='/'>Previous Page</Link>
                </div>
            );
    }
    else if (String(data)=="Mutation View") {
        return(
            <div className="main">
                <h1 className="logo">▒­░⡷⠂<span><Link to='/'> N.D </Link></span>⠐⢾░▒</h1>
                <h1><span>Hi 🙋🏼‍♂️ {name}</span></h1>
                <h1 className="h1"> Plaese Click on the Button to View Mutation</h1>
                <button className="button2"><a className="color" href="https://landrecords.karnataka.gov.in/Service11/MR_MutationExtract.aspx">Click Here</a></button>
                <Link className="link" to='/'>Previous Page</Link>
            </div>
        );
    }
    else if (String(data)=="Survey Atlas") {
        return(
                <div className="main">
                    <h1 className="logo">▒­░⡷⠂<span><Link to='/'> N.D </Link></span>⠐⢾░▒</h1>
                    <h1><span>Hi 🙋🏼‍♂️ {name}</span></h1>
                    <h1 className="h1">Plaese Click on the Button to View Survey Atlas</h1>
                    <button className="button2"><a className="color" href="https://landrecords.karnataka.gov.in/oscitizen/">Click Here</a></button>
                    <Link className="link" to='/'>Previous Page</Link>
                </div>
            );
    }
    else if (String(data)=="Survey Sketch Status") {
        return(
                <div className="main">
                    <h1 className="logo">▒­░⡷⠂<span><Link to='/'> N.D </Link></span>⠐⢾░▒</h1>
                    <h1><span>Hi 🙋🏼‍♂️ {name}</span></h1>
                    <h1 className="h1"> Plaese Click on the Button to View Application Status</h1>
                    <button className="button2"><a className="color" href="https://bhoomojini.karnataka.gov.in/service19/report/Applicationdetails">Click Here</a></button>
                    <Link className="link" to='/'>Previous Page</Link>
                </div>
            );
    }
    else if(String(data)=="Village Map Download"){
        return(
            <div className="main">
                    <h1 className="logo">▒­░⡷⠂<span><Link to='/'> N.D </Link></span>⠐⢾░▒</h1>
                    <h1><span>Hi 🙋🏼‍♂️ {name}</span></h1>
                    <h1 className="h1"> Plaese Click on the Button to download Village Map</h1>
                    <button className="button2"><a className="color" href="https://landrecords.karnataka.gov.in/service3/">Click Here</a></button>
                    <Link className="link" to='/'>Previous Page</Link>
                </div>
        );
    }
    else if(data=="Choose Your Choice"){
        <div className="main">
            <h1 className="logo">▒­░⡷⠂<span><Link to='/'> N.D </Link></span>⠐⢾░▒</h1>
            <h1 className="h1">Please select Correct Option</h1>
            <Link className="link" to='/'>Previous Page</Link>
        </div>
    }
}

export default Next; 