import React from "react";
import { Link } from "react-router-dom";
import AdminNavigation from "./Admin Navigation";
import AdminFooter from "./Admin footer";

function Mainpage() {
    return (
        <>
            <AdminNavigation />
            <div className="continer my-5">
                <div className="row">
                    <div className="col"></div>
                    <div className="col col-sm-6 col-md-4 col-lg-2 ">
                        <div className="card text-center" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/originals/6c/67/8c/6c678c23d360432d5dad8c4aae4d48ca.gif" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link className="btn btn-primary" to={"/userslist"}>Users List</Link>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="col"></div>
                    <div className="col col-sm-6 col-md-4 col-lg-2">
                        <div className="card text-center" style={{ width: "18rem" }}>
                            <img src="https://cdn.dribbble.com/users/4054/screenshots/4641313/checklist.gif" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link className="btn btn-primary" to={"/productslist"}>Products List</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                    <div className="col col-sm-6 col-md-4 col-lg-2">
                        <div className="card text-center" style={{ width: "18rem" }}>
                            <img src="https://cdn.dribbble.com/users/267700/screenshots/4437373/dribbs_shopping.gif" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link className="btn btn-primary" to={"/orderslist"}>Orders List</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <AdminFooter />

        </>
    )
}

export default Mainpage;