import React from "react";
import Navication from "../componants/Navigation";
import Footer from "../componants/Footer";

function Terms() {
    return (
        <>
            <Navication />
            <div className="container mt-5 ">
                <div className="col-0"></div>
                <div className="col-12">
                    <h4>Introduction</h4>
                    <br />
                    <p className="terms"><i className="bi bi-caret-right-fill"></i>Welcome to Feeding kurtis – Brand of Maternity wear. These Terms of Printing Service govern your use
                        of our website located at www.Feeding kurtis.com operated by Feeding kurtis.</p>
                    <p className="terms"><i className="bi bi-caret-right-fill"></i>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard, and
                        disclose information that results from your use of our web pages.</p>
                    <p className="terms"><i className="bi bi-caret-right-fill"></i>Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that
                        you have read and understood Agreements, and agree to be bound of them.
                    </p>
                    <p className="terms"><i className="bi bi-caret-right-fill"></i>If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please
                        let us know by emailing at Mail ID so we can try to find a solution. These Terms apply to all visitors,
                        users, and others who wish to access or use Service.
                    </p>
                    <br />
                    <hr />
                    <br />
                    <h4>Communication</h4>
                    <br />
                    <p className="terms"><i className="bi bi-caret-right-fill"></i>By using our Service, you agree to subscribe to newsletters, marketing or promotional materials, and
                        other information we may send. However, you may opt-out of receiving any, or all, of these
                        communications from us by following the unsubscribe link or by emailing at Mail ID.</p>
                </div>
            </div>
            <br />
            <Footer />
        </>
    )
}

export default Terms;