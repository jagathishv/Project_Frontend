
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../componants/Navigation";
import Footer from "../componants/Footer";

function UOrdersinfo() {
    let count = 0;
    const { state: { product } } = useLocation()
    const [Product, setProduct] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setProduct(product)
        setloading(false)
    }, [])
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
                                <th scope="col">Image</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">quantity</th>
                                <th scope="col">Size</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.map((p) => {
                                return (
                                    <tr key={product._id}>
                                        <td>{++count}</td>
                                        <td> <img src={p.Url} style={{ height: "6rem" }} /> </td>
                                        <td>{p.ProductName}</td>
                                        <td>{p.quantity}</td>
                                        <td>{p.size}</td>
                                        <td>{p.price}</td>
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


export default UOrdersinfo;