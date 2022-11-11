import React, { useEffect, useState } from "react";
import axios from "axios";
import "../componants/Course.css";
import Navication from "../componants/Navigation";
import Footer from "../componants/Footer";
import { useNavigate } from "react-router-dom";
//import ReactPaginate from "react-paginate";

function Home() {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(true)
   // const [pageCount, setpageCount] = useState(0);

    const Uauth = window.localStorage.getItem("Uauth")

    //let limit = 6;

    async function login(id) {
        window.localStorage.setItem("Id", id)
        if (Uauth) {
            navigate(`/quick/${id}`)
        } else {
            navigate("/login")
        }
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("https://feedingkurtis.herokuapp.com/api/homeproduct")
               // const total = res.headers.get("total-count");
                //setpageCount(Math.ceil(total / limit));
                setProducts(res.data);
                setloading(false);

            } catch (data) {
                alert(data.error)
            }
        };
        getProducts();
    }, []);

    // const getProduct = async (currentPage) => {
    //     try {
    //         const res = await axios.get(`https://feedingkurtis.herokuapp.com/api/homeproduct?_page=${currentPage}&_limit=${limit}`)
    //         return res.data;
    //     } catch (data) {
    //         alert(data.error)
    //     }
    // };


    // const handlePageClick = async (data) => {
    //     console.log(data.selected);

    //     let currentPage = data.selected + 1

    //     const postFromServer = await getProduct(currentPage);

    //     setProducts(postFromServer);
    //}


    return (
        <>
            <Navication />
            <br />
            {loading &&
                <div className="d-flex justify-content-center">
                    <img src="./img/Loading_icon.gif" alt="" />
                </div>
            }
            <div className="container">
                <div className="row">
                    {products.map((data) => {
                        return (
                            <div className="col col-sm-4 col-md-3 col-lg-3" key={data._id}>

                                <div className="card" style={{ width: "12rem", height: "23rem" }}>
                                    <img src={data.Url} className="card-img-top" alt="#" />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.Discription}</h5>
                                        <p className="card-text">{data.Price}</p>
                                        <button className="btn btn-outline-primary" onClick={() => login(data._id)}>Quick View </button >
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
            <br />
            {/* <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={5}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            /> */}
            <br />
            <Footer />
        </>
    );
}


export default Home;