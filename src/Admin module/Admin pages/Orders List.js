import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNavigation from "./Admin Navigation";
import AdminFooter from "./Admin footer";

function Orderslist() {
    let count = 0;
    const navigate = useNavigate();
    const [orders, setorders] = useState([]);
    const [loading, setloading] = useState(true)

    const Aauth = window.localStorage.getItem("Aauth")

    const getorders = async () => {
        try {
            const { data } = await axios.get("https://feedingkurtis.herokuapp.com/api/orders/payment", {
                headers: {
                    "Authorization": `Bearer ${Aauth}`
                }
            });
            setorders(data);
            setloading(false)
        } catch ({ response: { data, status } }) {
            if (status == "403" || status == "401") {
                window.localStorage.clear();
                navigate("/adminlogin", { replace: true })
            }
            else {
                alert(data.error)
            }
        }
    };

    useEffect(() => {
        getorders();
    }, []);
    async function statusupdate(order) {
        try {
            const res = await axios.put(`https://feedingkurtis.herokuapp.com/api/orders/statusupdate/${order._id}`, order, {
                headers: {
                    "Authorization": `Bearer ${Aauth}`
                }
            });
            getorders()
        } catch ({ response: { data, status } }) {
            if (status == "403" || status == "401") {
                window.localStorage.clear();
                navigate("/adminlogin", { replace: true })
            }
            else {
                alert(data.error)
            }
        }
    }

    return (
        <>
            < AdminNavigation />
            <br />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-1"></div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">s.no</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Address</th>
                                <th scope="col">Status</th>
                                <th scope="col"> Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((o) => {
                                return (
                                    <tr key={o._id}>
                                        <td>{++count}</td>
                                        <td>{o.time}</td>
                                        <td>{o.date}</td>
                                        <td >{o.token.card.address_line1}, {o.token.card.address_city}, {o.token.card.address_country}</td>
                                        <td>{o.status}</td>
                                        <td><button onClick={() => navigate("/aorderinfo", { state: { product: o.product } })} className="btn btn-outline-success ">Viwe Products</button>
                                            &nbsp;&nbsp;&nbsp;
                                            {o.status === "pending" && <button className="btn btn-outline-success" onClick={() => statusupdate(o)}>Accept</button>}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {loading &&
                        <div className="d-flex justify-content-center">
                            <img src="./img/Loading_icon.gif" alt="" />
                        </div>
                    }
                </div>
            </div>
            <br />
            <AdminFooter />
        </>
    );
}


export default Orderslist;