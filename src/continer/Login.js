// import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Navication from "../componants/Navigation";
import Footer from "../componants/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
    const [ulogin, setulogin] = useState({
        Email: "",
        Password: "",
    })

    const navigate = useNavigate();

    const handlechange = ({ target: { name, value } }) => {
        setulogin({ ...ulogin, [name]: value })
    };
    async function Ulogin() {
        const id = window.localStorage.getItem("Id")
        try {
            const { data: { authToken } } = await axios.post("https://project-backend-sqkd.vercel.app/api/auth/ulogin", ulogin);
            window.localStorage.setItem("Uauth", authToken)
            window.localStorage.setItem("Uemail",ulogin.Email)
            navigate(`/quick/${id}`, { replace: true })
        } catch ({ response: { data } }) {
            alert(data.error)
        }
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        
        Ulogin()
    }
    return (
        <>
            <Navication />
            <div className="container my-5">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center">LOGIN </h3>
                                <hr />
                                <form onSubmit={handlesubmit}>
                                    <div className="form-group">
                                        <label htmlFor="Email">Email</label>
                                        <input id="Email" type="email" className="form-control"
                                            name="Email"
                                            onChange={handlechange}
                                            value={ulogin.Email}
                                            placeholder="Enter your email" required="required" />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlor="Password">Password</label>
                                        <input id="password" type="password" className="form-control"
                                            name="Password"
                                            onChange={handlechange}
                                            value={ulogin.Password}
                                            placeholder="Enter your password" required />
                                        <br />
                                        <button className="btn btn-success" type="submit" id="submit">Login</button>
                                    </div>
                                    <br />
                                    <p>Don't have an account ? <Link to={"/register"}>Register here</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;