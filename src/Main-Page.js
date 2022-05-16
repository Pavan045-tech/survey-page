import React , {useState} from "react";
import { Link } from "react-router-dom";
import './Main-Page.css';

const Main = () => {

    const [state,setstate]=useState("");
    const [name,setname]=useState("");

    const change = (event) => {
        console.log(event.target.value);
        setstate(event.target.value);
    }

    const change2 = (e)=>{
        setname(e.target.value);
    }

    return(
        <div>
            <div className="Main">
                    <h1 className="logo">▒­░⡷⠂<span>N.D</span>⠐⢾░▒</h1>
                    <ul className="navbar">
                        <li><a><Link className="li" to='/'>Home</Link></a></li>
                        <li><a><Link className="li" to='/about'>about</Link></a></li>
                        <li><a><Link className="li" to='/portfolio'>Portfolio</Link></a></li>
                        <li><button className="contact"><a className="li"><Link className="li" to='/Contact'>Contact</Link></a></button></li>
                    </ul>
            </div>
            <div className="second">
                <div>
                    <h1 className="Welcome">N.DODDE GOWDA LAND RECORDS SERVICES</h1>
                    <p className="para1">Welcome to N.Doddegowda Revenue Services and this platform helps the people to Download the Land Records file 
                        in online only and you can also take official copies of Document by Contact with the Experts of our Platform
                        <Link className="readmore" to='readmore/'><button className="readmore">Read More..</button></Link>
                    </p>
                </div>
                {/* <img className="image1" src="https://images.launchbox-app.com/ecee1ca5-3356-45a1-b645-b703f6a14cba.jpg"></img> */}
                <div className="image1">
                    <h2 className="h2">Fill Form :</h2>
                    <form className="form">
                    <input id='name' type='text' placeholder="Enter Your Name" onChange={change2} required></input>
                    <input id='input2' type='email' placeholder="Enter Your E-mail id" required></input>
                    <select className="select" onChange={change}>
                        <option>Choose Your Choice</option>
                        <option>RTC view</option>
                        <option>Mutation View</option>
                        <option>Survey Atlas</option>
                        <option>Village Map Download</option>
                        <option>Survey Sketch Status</option>
                    </select>
                    <button className="submit"><Link className="submit" to={`/next/${state}/${name}`}>Submit</Link></button></form>
                </div>
            </div>
        </div>
    );
}

export default Main;