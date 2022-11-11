import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Navication from "../componants/Navigation";
import Footer from "../componants/Footer";
import React, { useState } from "react";
import axios from "axios";

function Register() {

    const [user, setuser] = useState({
        FullName: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""
    })

    const navigate = useNavigate();

    const handlechange = ({ target: { name, value } }) => {
        setuser({ ...user, [name]: value })
    };
    async function createuser() {
        try {
            const { data } = await axios.post("https://feedingkurtis.herokuapp.com/api/auth/register", user);
            window.localStorage.setItem("User Name", user.FullName)
            swal("Register Successfully");
            navigate("/login");
        } catch ({ response: { data } }) {
            console.log(data.error)
        }
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        createuser()
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
                                <h3 className="card-title text-center">REGISTER</h3>
                                <hr />
                                <form onSubmit={handlesubmit} >
                                    <div className="form-group">
                                        <label htmlFor="Full Name">Full Name</label>
                                        <input id="FullName" type="text"
                                            name="FullName"
                                            onChange={handlechange}
                                            value={user.FullName}
                                            className="form-control" placeholder="Enter your name" required />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input id="Email" type="email"
                                            name="Email"
                                            onChange={handlechange}
                                            value={user.Email}
                                            className="form-control"
                                            placeholder="Enter your email" required />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input id="password" type="password"
                                            name="Password"
                                            onChange={handlechange}
                                            value={user.Password}
                                            className="form-control"
                                            placeholder="Enter your password" required />
                                        <br />
                                        <div className="form-group">
                                            <label htmlFor="Cpassword">Confirm Password</label>
                                            <input id="ConfirmPassword" type="password"
                                                name="ConfirmPassword"
                                                onChange={handlechange}
                                                value={user.ConfirmPassword}

                                                className="form-control"
                                                placeholder="Confirm your password" required />
                                            <br />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit" id="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
            <Footer />
        </>
    );
}

export default Register;
