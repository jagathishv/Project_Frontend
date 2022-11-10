// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Course({ data }) {
//     const navigate = useNavigate()
    
//     const Uauth = window.localStorage.getItem("Uauth")

//     async function login(id) {
//         window.localStorage.setItem("Id", id)
//         if (Uauth) {
//             navigate(`/quick/${id}`)
//         } else {
//             navigate("/login")
//         }
//     }
//     return (
//         <>
//             <div className="card" style={{ width: "12rem", height: "23rem" }}>
//                 <img src={data.Url} className="card-img-top" alt="#" />
//                 <div className="card-body">
//                     <h5 className="card-title">{data.Discription}</h5>
//                     <p className="card-text">{data.Price}</p>
//                     <button className="btn btn-outline-primary" onClick={() => login(data._id)}>Quick View </button >
//                 </div>
//             </div>
//         </>
//     );

// }

// export default Course;