// import files
import Footer from "../componants/Footer";
import React from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import Navigation from "../componants/Navigation";
import { useDispatch } from "react-redux";
import { removeProduct } from "..//redux/cartRedux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../componants/Cart.css";

// stripe key
const KEY = "pk_test_51LWyCSSBOV6KUYv2CBuaCskSmLQmR4gVxPyt0fH769EFCpVy6XG9VFlhpYdVgLVi3DxHPcZjWF5AtorwY4B0jOOy002u1QmWL1";

// cart function
export default function Cart() {
  // authtoken localStorage
  const Uauth = window.localStorage.getItem("Uauth")

  // navigate to page
  const navigate = useNavigate();

  // state management
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // declere the variables
  const product = cart.products;
  const quantity = cart.quantity;
  const total = cart.total;

  // initial order status
  const status = "order placed";

  // remove from cart
  const handleRemove = (index) => {
    dispatch(
      removeProduct({ index, price: product[index].price, quantity, total })
    );
  };

  // payment function & api call
  async function handleToken(token, addresses) {
    // send to payment
    try {
      const response = await axios.post("https://feedingkurtis.herokuapp.com/api/orders/payment", {
        token,
        product,
      }, {
        headers: {
          Authorization: `Bearer ${Uauth}`,
        },
      });
    } catch ({ response: { data, status } }) {
      if (status == "403" || status == "401") {
        window.localStorage.clear();
        navigate("/", { replace: true })
      }
      else {
        alert(data.error)
      }
    }

    // navigate to success page
    navigate("/success");

    
  }

  return (
    <>
      <Navigation />
      <div className="container">
        {total === 0 ? (
          <div className="text-center">
            <h1 className="fw-bold text-success">Cart Empty</h1>
            <h6>Go to order Feedingkurtis</h6>
            <img className="w-50" src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" alt="" />
          </div>) : (
          <div className="row">
            {/* cart list */}
            <div className="col-lg-8">
              <div className="row">
                {product.map((product, index) => (
                  <CartTemplate
                    {...product}
                    key={index}
                    delbtn={
                      <button
                        onClick={() => handleRemove(index)}
                        className="btn btn-outline-white border-0 text-danger"
                      >
                        <span
                          className="iconify"
                          data-icon="ant-design:delete-filled"
                        ></span>
                      </button>
                    }
                  />
                ))}
              </div>
            </div>
            {/* cart total */}
            <div className="col h-100 shadow-lg mt-2 rounded-3 text-center MainContent_Text m-2">
              <div className="p-3">
                <h4 className="fw-bold">Order summary</h4>
                <h6>
                  Total Price:{" "}
                  <span className="fw-bold text-success">
                    ₹ {Math.round(total)}
                  </span>
                </h6>
                <StripeCheckout
                  name="Feedingkurtis"
                  phonenumber
                  billingAddress
                  shippingAddress
                  description={`Your amount is ₹ ${Math.round(total)}`}
                  amount={Math.round(total) * 100}
                  token={handleToken}
                  currency="INR"
                  stripeKey={KEY}>
                  <button className="btn btn-outline-danger text-warning fw-bold">
                    Checkout Now
                  </button>
                </StripeCheckout>
              </div>
            </div>
          </div>)}
      </div>
      <Footer />
    </>
  );
}
// cart template
function CartTemplate({ Url, Discription, name, quantity, Price, delbtn, size }) {
  return (
    <div className="col-sm-5 col-md-6 MainContent_Text">
      <div className="card border-0 shadow-lg rounded-3 mx-auto text-center m-2">
        <div className="text-center">
          <img src={Url} className="card-img-top w-50" alt="..." />
        </div>
        <div className="card-body">
          <h6 className="fw-bold text-secondary"> Name: {name}</h6>
          <h6 className="fw-bold text-secondary">Detials: {Discription}</h6>
          <h6 className="fw-bold text-secondary">Qty: {quantity}</h6>
          <h6 className="fw-bold text-secondary">Size: {size}</h6>
          <h6 className="fw-bold text-secondary">
            Price: <span className="text-success">₹ {Price * quantity}</span>
          </h6>
          <span className="delbtn">{delbtn}</span>
        </div>
      </div>
    </div>
  );
}
