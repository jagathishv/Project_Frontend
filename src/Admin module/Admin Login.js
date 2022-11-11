import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import AdminFooter from "./Admin pages/Admin footer"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Adminlogin() {
    const navigate = useNavigate()
    const initialValues = { Email: "", Password: "" };
    const [alogin, setalogin] = useState(initialValues);

    const handleChange = ({ target: { name, value } }) => {
        setalogin({ ...alogin, [name]: value })
    };

    async function Alogin() {
        try {
            const { data: { authToken } } = await axios.post("http://localhost:5000/api/auth/alogin", alogin);
            window.localStorage.setItem("Aauth", authToken)
            navigate("/mainpage", { replace: true })
        } catch ({ response: { data } }) {
            alert(data.error)
        }
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        Alogin()

    }
    return (
        <>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/mainpage"}>
                        <img width="100" height="80" src="./img/LOGO 3.svg" alt="#" />FeedingKurthis
                    </Link>
                    <form className="d-flex" role="search">
                        <span className="account ms-4">
                            <Link className="btn btn-success" to={"/adminlogin"}>Login</Link>
                        </span>
                    </form>
                </div>
            </nav>
            <div className="container my-5">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <p>Login and Explore</p>
                    <p>Email : jagathishveerappan@gmail.com</p>
                     <p> Password: 12345</p>
                     </div>
                    <div className="col-4"></div>
                </div>
            </div>
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
                                            onChange={handleChange}
                                            placeholder="Enter your email" required="required" />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlor="Password">Password</label>
                                        <input id="password" type="password" className="form-control"
                                            name="Password"
                                            onChange={handleChange}
                                            placeholder="Enter your password" required />
                                        <br />
                                        <button className="btn btn-success" type="submit" id="submit">Login</button>
                                    </div>
                                    <br />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
            <AdminFooter />
        </>
    );
}

export default Adminlogin;