import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavigation from "./Admin Navigation";
import { Link } from "react-router-dom";
import AdminFooter from "./Admin footer";
import { useNavigate } from "react-router-dom";


function productslist() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(true)
  const [productDatas, setproductdata] = useState([])

  const Aauth = window.localStorage.getItem("Aauth")

  async function getproductDatas() {
    try {
      const { data } = await axios.get("https://project-backend-sqkd.vercel.app/api/productdata", {
        headers: {
          "Authorization": `Bearer ${Aauth}`
        }
      });
      setproductdata(data);
      setloading(false)
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
  useEffect(() => {
    getproductDatas();
  }, []);


  // Delete Products
  const deleteProduct = async ({ _id }) => {
    if (window.confirm(`Are You Sure You Want to Delete this Product ${_id}`)) {
      try {
        await axios.delete(`https://project-backend-sqkd.vercel.app/api/productdata/${_id}`, {
          headers: {
            "Authorization": `Bearer ${Aauth}`
          }
        });
        alert("Deleted Successfully");
        getproductDatas();
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
  };
  return (
    <>
      <AdminNavigation />
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <Link className="btn btn-success" to={"/addproduct"}>Add Product</Link>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Discription</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {productDatas.map((p) => {
                  return (
                    <tr key={p._id}>
                      <td> <img src={p.Url} style={{ height: "6rem" }} /> </td>
                      <td>{p.ProductName}</td>
                      <td>{p.Price}</td>
                      <td>{p.Discription}</td>
                      <td><i className="fa-solid fa-pen-to-square text-primary fa-lg"
                        onClick={() => navigate(`/editproduct/${p._id}`)}></i>&nbsp;&nbsp;&nbsp;
                        <i className="fa-solid fa-trash-can fa-lg" onClick={() => deleteProduct(p)}></i></td>
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
      </div>
      <AdminFooter />
    </>
  )
}

export default productslist;