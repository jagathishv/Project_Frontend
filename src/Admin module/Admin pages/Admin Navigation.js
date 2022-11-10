import React  from "react";
import { Link } from "react-router-dom";
//import swal from "sweetalert/typings/core";

function AdnimNavigation() {
    // const navigate=useNavigate()
    // const Logout = () => {
    //     window.localStorage.clear();
    //     navigate("/mainpage", { replace: true });
    //     swal("Thank you,Welcome!");
    // };
    return (
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/mainpage"}>
                    <img width="60" height="80" src="https://i.ibb.co/3k6R2jC/Screenshot-13-removebg-preview.png" alt="#" />FeedingKurthis
                </Link>
                <form className="d-flex" role="search">
                    <span className="account ms-4">
                        <Link className="btn btn-success" to={"/adminlogin"}>Logout</Link>
                    </span>
                </form>
            </div>
        </nav>
    )
}

export default AdnimNavigation;