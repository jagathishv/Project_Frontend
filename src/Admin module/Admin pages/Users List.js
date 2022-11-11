import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavigation from "./Admin Navigation";
import AdminFooter from "./Admin footer";
import { useNavigate } from "react-router-dom";

function userslist() {
    let count = 0
    const navigate = useNavigate();
    const [loading, setloading] = useState(true)
    const [userslists, setuserslist] = useState([])

    const Aauth = window.localStorage.getItem("Aauth")

    async function getuserslists() {
        try {
            const { data } = await axios.get("https://feedingkurtis.herokuapp.com/api/userslist", {
                headers: {
                    "Authorization": `Bearer ${Aauth}`
                }
            });
            setuserslist(data);
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
        getuserslists();
    }, []);
    return (
        <>
            <AdminNavigation />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">User Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Register date</th>
                                    <th scope="col">Register time</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {userslists.map((u) => {
                                    return (
                                        <tr key={u._id}>
                                            <td>{++count}</td>
                                            <td>{u.FullName}</td>
                                            <td>{u.Email}</td>
                                            <td>{u.date}</td>
                                            <td>{u.time}</td>
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

export default userslist;