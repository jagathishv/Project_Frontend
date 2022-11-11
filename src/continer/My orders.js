import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "../componants/Navigation";
import Footer from "../componants/Footer";

function Orders() {
    let count = 0;
    const navigate = useNavigate();
    const [orders, setorders] = useState([]);
    const [loading, setloading] = useState(true)

    const Uauth = window.localStorage.getItem("Uauth")

    const getorders = async () => {
        try {
            const { data } = await axios.get("https://feedingkurtis.herokuapp.com/api/orders/myorders", {
                headers: {
                    "Authorization": `Bearer ${Uauth}`
                }
            });
            setorders(data);
            setloading(false)
        } catch ({ response: { data, status } }) {
            if (status == "403" || status == "401") {
                window.localStorage.clear();
                navigate("/", { replace: true })
            }
            else {
                alert(data.error)
            }
        }
    };
    useEffect(() => {
        getorders();
    }, []);
    return (
        <>
            < Navigation />
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
                                        <td>{o.date}</td>
                                        <td>{o.time}</td>
                                        <td>{o.token.card.address_line1}</td>
                                        <td>{o.status}</td>
                                        <td><button onClick={() => navigate("/aorderinfo", { state: { product: o.product } })} className="btn btn-success">Viwe Products</button>
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
            <Footer />
        </>
    );
}


export default Orders;