import React, { useEffect, useState } from "react";
import styles from "./BrandsDetails.module.css";
import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";

export default function BrandsDetails() {
  const { state } = useLocation();
  const [isLoading, setisLoading] = useState(false);
  const [BrandsDetails, setBrandsDetails] = useState(null);

  async function getBrandsDetails() {
    setisLoading(true);
    try {
      console.log("state", state);
      let { data } = await axios.get(
        `https://route-ecommerce.onrender.com/api/v1/brands/${state.BrandsDetails}`
      );
      setisLoading(false);

      setBrandsDetails(data.data);
    } catch (error) {
      console.log("get product details function error:", error);
    }
  }

  useEffect(function () {
    getBrandsDetails();
  }, []);
  return (
    <>
      {BrandsDetails ? (
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3 ">
              <img src={BrandsDetails.image} />
            </div>
            <div className=" col-md-9">
              <h2>{BrandsDetails.name}</h2>
              <p>{BrandsDetails.slug}</p>
              <div className="d-flex justify-content-between mt-5"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <i className="fas fa-spinner fa-spin fa-2x text-main"></i>
        </div>
      )}
    </>
  );
}
