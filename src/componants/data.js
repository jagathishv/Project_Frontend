
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/cartRedux";
import swal from "sweetalert";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  // const [count, setCount] = useState(1);
  const KEY =
    "pk_test_51LUWTrSImtCLG8DbASYF7VaJDv9tWSotvodcAMS2gT5JUzPQGHbCwswCj17U0eqF15u1eX9x7hVnwm0tYzu1Il2900aFjk0q1I";


  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const product = cart.products;
  const quantity = cart.quantity;
  const total = cart.total;

  const [stripeToken, setStripeToken] = useState(null);
  // const [orders, setOrders] = useState([]);

  const accessToken = window.localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
    console.log(token);
    swal("SUCCESSFULY PAID!", "Check your mail!", "success");
    navigate("/login");
  };

  // get Id from authToken

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = decodeURIComponent(
      atob(base64Url)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(base64);
  }
  let a = parseJwt(accessToken);
  let userId = a._id;

  //  Payment Api

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("https://feedingkurtis.herokuapp.com/api/payment", {
          tokenId: stripeToken.id,
          amount: { total },
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken]);

  // Order Api
  const getOrders = async () => {
    try {
      const res = await axios.post("https://feedingkurtis.herokuapp.com/api/order", {
        userId,
        product,
        total,

      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  // remove from cart
  const handleRemove = () => {
    dispatch(removeProduct({ product, price: product.price, quantity, total }));
  };



  // const handleQuantity = (type) => {
  //   if (type === "dec") {
  //     quantity > 1 && setQuantity(count - 1);
  //   } else {
  //     setQuantity(count + 1);
  //   }
  // };

  // const handleClick = () => {
  //   dispatch(addProduct({ ...product, quantity }));
  // };

  return (
    <>
      <div>
        <div
          className="container-fluid d-flex"
          style={{ backgroundColor: "#bf2758" }}
        >
          <Link to="./home.html" className="navbar-brand">
            <img src="./image/f.png" alt="" width="100" height="50" />
          </Link>
          <p className="text-white mb-1 fs-1">PETTY SHOP</p>

          <div>
            <Link
              to="/home"
              className="text-white position-absolute top-0 end-0 pt-3 m-1"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        <section className="py-4 container">
          <div className="row justify-content-center">
            <div className="col-12 rounded-3">
              <h5>Cart-Items: {cart.quantity}</h5>
              <table className="table table-light table-hover  m-0">
                <tbody>
                  {cart.products.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td>
                          <img
                            src={product.image}
                            alt=""


                            style={{
                              objectFit: "contain",
                              height: "6rem",
                              width: "8rem",
                            }}
                          />
                        </td>
                        <td>{product.name}</td>
                        <td>Rs.{product.price}</td>
                        <td>Quantity:{product.quantity}</td>
                        <td> Amount:{product.price * product.quantity}</td>
                        <td>

                          {/* <div
                            className="addContainer pb-2"
                            style={{
                              width: "50 %",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              className="amountContainer"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                fontWeight: "700px",
                              }}
                            >
                              <button
                                className="btn btn-danger ms-2 "
                                style={{
                                  borderRadius: "10px",
                                }}
                                onClick={() => handleQuantity("dec")}
                              >
                                -
                              </button>
                              <div
                                className="btn ms-2"

                              >
                                {" "}
                                {quantity}
                              </div>
                              <button
                                className="btn btn-info ms-2 "
                                style={{
                                  borderRadius: "10px",
                                }}
                                onClick={() => handleQuantity("inc")}
                              >
                                +
                              </button>
                            </div>
                          </div> */}

                          {/* <button
                        className="btn btn-info ms-2 "
                      // onClick={() =>
                      //   updateItemQuantity(product.id, product.quantity + 1)
                      // }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-info ms-2 "
                      // onClick={() =>
                      //   updateItemQuantity(item.id, item.quantity - 1)
                      // }
                      >
                        -
                      </button> */}
                          <button
                            className="btn btn-danger ms-2 "
                            onClick={handleRemove}
                          >
                            <span
                              class="iconify"
                              data-icon="fluent:delete-16-filled"
                              data-width="20"
                            ></span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="col-auto ms-auto">
              <h2>Total Price:Rs.{cart.total}</h2>
            </div>
            <div className="col-auto">
              {/* <button className="btn btn-danger m-2"
                onClick={handleRemove}
              >
                {" "}
                ClearCart
              </button> */}


              <StripeCheckout
                name="Petti Shop"
                image="./image/f.png"
                billingAddress
                shippingAddress
                description={`Your total is  ₹ ${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                currency="INR"
                stripeKey={KEY}
              >
                <button className="btn btn-danger ms-2 ">Pay Now</button>
              </StripeCheckout>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

//export default Cart;