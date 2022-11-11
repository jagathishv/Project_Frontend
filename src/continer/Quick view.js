import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navication from "../componants/Navigation";
import Footer from "../componants/Footer";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";

function Quick() {
    const navigate = useNavigate();
    let { id } = useParams();
    const location = useLocation();
    const [quickview, setquickview] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [size, setsize] = useState()
    const Uauth = window.localStorage.getItem("Uauth")
    const dispatch = useDispatch();

    const getquickview = async () => {
        try {
            const res = await axios.get(`https://feedingkurtis.herokuapp.com/api/quick/${id}`, {
                headers: {
                    "Authorization": `Bearer ${Uauth}`
                }
            }
            );
            setquickview(res.data);
        } catch ({ response: { data, status } }) {
            if (status == "403" || status == "401") {
                window.localStorage.clear();
                navigate("/login", { replace: true })
            }
            else {
                alert(data.error)
            }
        }
    };
    useEffect(() => {
        getquickview();
    }, []);

    const handleDegrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1)
        }
    }

    const handleIngrement = () => {
        if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1)
        }
    }

    function sizevalue({ target: { value } }) {
        setsize(value)
    }

    const hadleClick = () => {
        dispatch(addProduct({ ...quickview, price: quickview.Price, quantity, size })
        );

    }
    return (
        <>
            <Navication />
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5">
                        <img src={quickview.Url} className="img-thumbnail" alt="..." />
                        {/* <div className="card" style={{width: "20rem"}}>
                            <img src={quickview.Url} className="card-img-top" alt="..."/>
                        </div> */}
                    </div>
                    <div className="col-5">
                        <br />
                        <p><i className="bi bi-caret-right-fill"></i>{quickview.Discription}</p> <br />
                        <span>Price</span>&nbsp;&nbsp;<span>:</span>&nbsp;&nbsp;<span id="pa_price">{quickview.Price}</span>
                        <br />
                        <div>
                            <br />
                            <label htmlFor="pa_size">size</label>&nbsp;&nbsp;
                            <select onChange={sizevalue} id="pa_size" className="" name="attribute_pa_size" data-attribute_name="attribute_pa_size"
                                data-show_option_none="yes">
                                <option >Choose an option</option>
                                <option value="M" className="attached enabled">M</option>
                                <option value="L" className="attached enabled">L</option>
                                <option value="XL" className="attached enabled">XL</option>
                                <option value="XXL" className="attached enabled">Xxl</option>
                            </select>
                            <a className="reset_variations" href="#" style={{ visibility: "hidden" }}>Clear</a>
                        </div>
                        <br />
                        <div>
                            <button
                                className="btn btn-none border-0"
                                onClick={(handleDegrement)}>
                                <span
                                    className="iconify text-danger"
                                    data-icon="bi:file-minus-fill"
                                    data-width="40"></span>
                            </button>
                            <span className="fw-bold">{quantity}</span>
                            <button
                                className="btn btn-none border-0"
                                onClick={(handleIngrement)}>
                                <span
                                    className="iconify text-warning"
                                    data-icon="bi:file-plus-fill"
                                    data-width="40"></span>
                            </button>
                            <br />
                            <br />
                        </div>
                        <button className="btn btn-success" onClick={hadleClick} >+Add cart</button>&nbsp;&nbsp;
                        <hr />
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col">
                        <p>Availability:<span className="In Stock" style={{ color: "green" }}> In Stock</span></p>
                        <p>SKU:N/A </p>
                        <p>Categories:Feeding Kurtis</p>
                        <p>Tags:Feeding Kurtis, feedingtops, Maternity kurtis, maternitydress, maternitywear, motherstops, nursing dress
                        </p>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f "></i></a>&nbsp;&nbsp;
                            <a href="#"><i className="fab fa-twitter"></i></a>&nbsp;&nbsp;
                            <a href="#"><i className="fab fa-instagram"></i></a>&nbsp;&nbsp;
                            <a href="#"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
            <br />
            <Footer />
        </>
    );
}

export default Quick;