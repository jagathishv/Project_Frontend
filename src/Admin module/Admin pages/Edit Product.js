import React, { useState, useEffect } from "react";
import AdminNavigation from "./Admin Navigation";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminFooter from "./Admin footer";
function editproduct() {
    const navigate = useNavigate();
    let { id } = useParams();

    const [eproduct, seteproduct] = useState({});

    const Aauth = window.localStorage.getItem("Aauth")

    const Editid = async () => {
        try {
            const { data } = await axios.get(`https://feedingkurtis.herokuapp.com/api/productdata/${id}`, {
                headers: {
                    "Authorization": `Bearer ${Aauth}`
                }
            });
            seteproduct(data);
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
        Editid();
    }, [])

    const Productchange = ({ target: { name, value } }) => {
        seteproduct({ ...eproduct, [name]: value })
    }
    async function Update() {
        try {
            const { data } = await axios.put(`https://feedingkurtis.herokuapp.com/api/productdata/${id}`, eproduct, {
                headers: {
                    "Authorization": `Bearer ${Aauth}`
                }
            })
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
    function Updatesubmit(e) {
        e.preventDefault();
        Update()
        navigate("/productslist")
    }

    return (
        <>
            <AdminNavigation />
            <div className="container my-5">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center">Update Product</h3>
                                <hr />
                                <form onSubmit={Updatesubmit}>
                                    <div className="form-group">
                                        <label htmlFor="ProductName">Product Name</label>
                                        <input id="ProductName" type="text"
                                            name="ProductName"
                                            value={eproduct.ProductName}
                                            onChange={Productchange}
                                            className="form-control" placeholder="Enter the Product name" required />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="Url">Url</label>
                                        <input id="Url" type="text"
                                            name="Url"
                                            value={eproduct.Url}
                                            onChange={Productchange}
                                            className="form-control" placeholder="Enter the Url" required />
                                    </div>
                                    <br />

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Discription</label>
                                        <textarea className="form-control" id="Discription" rows="3"
                                            name="Discription"
                                            value={eproduct.Discription}
                                            onChange={Productchange}
                                            placeholder="Enter the Discription" required ></textarea>
                                        <br />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Price</label>
                                        <input id="Price" type="text"
                                            name="Price"
                                            value={eproduct.Price}
                                            onChange={Productchange}
                                            className="form-control"
                                            placeholder="Enter the Price" required />
                                        <br />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success" >Update Product</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>

                </div>
            </div >
            <AdminFooter />
        </>
    )
}
export default editproduct;