import React, { useState } from "react";
import AdnimNavigation from "./Admin Navigation";
import axios from "axios";
import Footer from "../../componants/Footer";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function addproduct() {
    const [Product, setProduct] = useState({
        ProductName: "",
        Url: "",
        Discription: "",
        Price: ""
    })
    const Aauth = window.localStorage.getItem("Aauth")

    const navigate = useNavigate();

    const handlechange = ({ target: { name, value } }) => {
        setProduct({ ...Product, [name]: value })
    };

    async function newproduct() {
        try {
            const { data } = await axios.post("http://localhost:5000/api/addProduct", Product,{
                headers: {
                "Authorization": `Bearer ${Aauth}`
            }
        });
            swal("Product Add Successfully");
            navigate("/productslist");

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

    const handlesubmit = async (e) => {
        e.preventDefault();
        newproduct()
    }
    return (
        <>
            <AdnimNavigation />
            <div className="container my-5">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center">Add Product</h3>
                                <hr />
                                <form onSubmit={handlesubmit}>
                                    <div className="form-group">
                                        <label htmlFor="ProductName">Product Name</label>
                                        <input id="ProductName" type="text"
                                            name="ProductName"
                                            onChange={handlechange}
                                            value={Product.ProductName}
                                            className="form-control" placeholder="Enter the Product name" required />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="Url">Url</label>
                                        <input id="Url" type="text"
                                            name="Url"
                                            onChange={handlechange}
                                            value={Product.Url}
                                            className="form-control" placeholder="Enter the Url" required />
                                    </div>
                                    <br />

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Discription</label>
                                        <textarea className="form-control" id="Discription" rows="3"
                                            name="Discription"
                                            onChange={handlechange}
                                            value={Product.Discription}

                                            placeholder="Enter the Discription" required ></textarea>
                                        <br />
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="password">Price</label>
                                        <input id="Price" type="text"
                                            name="Price"
                                            onChange={handlechange}
                                            value={Product.Price}
                                            className="form-control"
                                            placeholder="Enter the Price" required />
                                        <br />
                                    </div>


                                    <div className="form-group">
                                        <button className="btn btn-success" >Add Product</button>
                                    </div>



                                </form>
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>

                </div>
            </div >
            <Footer />
        </>
    )
}

export default addproduct;