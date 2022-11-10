import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../componants/Navigation";
import Footer from "../componants/Footer";
import axios from "axios";

export default function UserProfile() {
 
  // navigate to page
  const navigate = useNavigate();

  // user details state management
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get users details and api call
  const getUserProfile = async () => {
    try {
      const { data } = await axios.get("");
      setUsers(data);
      console.log(data)
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect use refresh data
  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="row mx-auto mt-3">
          {/* Profile details */}
          <div className="col-sm-4 col-md-6 col-lg-4 mx-auto text-center">
            {/* <img src={users.img} alt="" className="w-75 rounded-2" /> */}
            <h5 className="text-danger mt-3">
              Name: <span className="text-secondary">{users.name}</span>
            </h5>
            <h5 className="text-danger">
              Email Id: <span className="text-secondary">{users.email}</span>
            </h5>
            <h5 className="text-danger">
              Contact-Number:{" "}
              <span className="text-secondary">{users.mobile} </span>
            </h5>
            <h5 className="text-danger">
              Address: <span className="text-secondary">{users.address}</span>
            </h5>
            <h5 className="text-danger">
              Pincode: <span className="text-secondary">{users.pincode} </span>
            </h5>
          </div>
          {/*Edit  profile */}
          <button
            className="btn btn-info btn-sm"
            onClick={() => navigate("/updateprofile/edit/" + users._id)}>
            <span
              className="iconify"
              data-icon="bxs:edit"
              size="15px"
              color="blue"
            ></span>
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}