import React from "react";
import Navigation from "../componants/Navigation";
import Footer from "../componants/Footer";

function About() {
    return (
        <>
            < Navigation />
            <div className="container-fluid">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <div className="dropdown mt-4 ">
                            <h1 className="about us-title text-center" >Feeding kurtis is leadingClothing
                                Online Store</h1>
                            <br />
                            <h5 className="about us-title text-center" ><b>feeding kurtis</b> is a leading womens fashion clothing
                                and accessory store in India</h5>
                            <br />
                            <p className="about us-title text-center" >Focusing on the very latest in affordable fashion styles, both
                                attire and stunning accessories, we feature hundreds of the newest product lines, providing
                                maximum choice and convenience to our discerning clientele.We also aim to provide an extensive
                                range of high quality, trendy fashion clothing together with a professional dedicated service to
                                our valued customers from across the nation.</p>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <div className="card" style={{ width: "20rem" }}>
                            <img src="../img/about as-1.webp" className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <br />
            <br />
            <div className="container-fluid">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <h4><mark style={{ backgroundColor: "red" }}>HOW TO BUY?</mark></h4>
                        <br />
                        <h3>SEARCH, SELECT,
                            BUY ONLINE</h3>
                        <br />
                        <p>The store makes use of the latest in technology for its online shopping experience. Therefore, you
                            have the complete online shopping experience in a convenient and hassle free manner. We offer a
                            constant stream of interesting items to purchase, which keeps our customers coming back from their
                            travels. </p>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                        <div className="card" style={{ width: "20rem" }}>
                            <img src="../img/about as-2.webp" className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <br />
            <br />
            <div className="container-fluid">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <div className="card" style={{ width: "20rem" }}>
                            <img src="../img/about as-3.webp" className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                        <h4 className="about mt-5"><mark style={{ backgroundColor: "red" }}>ABOUT PRODUCT DELIVERY?</mark></h4>
                        <br />
                        <h3>QUICK DELIVERY
                            NATIONALWIDE</h3>
                        <br />
                        <p>we are partnering with leading shipping delivery service companies in the country. so you can get
                            your product on time with hassle free service.</p>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <br />
            < Footer />
        </>
    );
}

export default About;
