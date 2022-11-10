import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Navigation() {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const email = window.localStorage.getItem("Uemail");

    const Logout = () => {
        window.localStorage.clear();
        navigate("/", { replace: true });
        swal("Thank you,Welcome!");
    };

    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                        <img width="60" height="80" src="https://i.ibb.co/3k6R2jC/Screenshot-13-removebg-preview.png" alt="#" />FeedingKurthis
                    </Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item ms-3">
                                <Link className="nav-link " to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {email}
                                </Link>
                                <ul className="dropdown-menu ms-3">
                                    {/* <li><Link className="dropdown-item" to={"/myprofile"}>My Profile</Link></li> */}
                                    <li><Link className="dropdown-item" to={"/myorders"}>My Orders</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li >&nbsp;&nbsp;&nbsp;<button className="btn btn-danger"onClick={Logout}>Logout</button></li>
                                </ul>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link" to={"/contact"}>contact</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link" to={"/about"}>about us</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link" to={"/cart"}>
                                    <i className="bi-cart2"><span>{cart.quantity}</span></i></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}




export default Navigation;