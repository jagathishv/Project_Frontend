import React from "react";
import { Link } from "react-router-dom";

function AdminFooter() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="footer-col col-3">
                        <img width="150" height="200" src="https://i.ibb.co/3k6R2jC/Screenshot-13-removebg-preview.png" alt="#" />
                        <ul>
                            <li><a href="#">Copyright Ⓒ 2022 Feeding kurtis
                                All Rights Reserved.</a></li>
                            <img src="https://i.ibb.co/crYVdWk/pay.png " alt="#" />
                        </ul>
                    </div>
                    <div className="footer-col col-3">
                        <h4>Quick links</h4>
                        <ul>
                            <li><Link to={"/userslist"}>Users List</Link></li>
                            <li><Link to={"/productslist"}>Products List</Link></li>
                            <li><Link to={"/orderslist"}>Orders List</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col col-3">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><a href="#">9080454718</a></li>
                            <li><a href="#">feeding kurtis@gmail.com</a></li>
                            <li><a href="#">chennai</a></li>
                        </ul>
                    </div>
                    <div className="footer-col col-3">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AdminFooter;