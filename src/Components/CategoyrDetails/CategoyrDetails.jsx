import styles from "./CategoyrDetails.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";

export default function CategoryDetails() {
  const { state } = useLocation();
  const [isLoading, setisLoading] = useState(false);
  const [category, setCategory] = useState(null);

  async function getCategoryDetails() {
    setisLoading(true);
    try {
      let { data } = await axios.get(
        `https://route-ecommerce.onrender.com/api/v1/categories/${state.CategoryDetails}`
      );
      setisLoading(false);

      setCategory(data.data);
    } catch (error) {
      console.log("get product details function error:", error);
    }
  }

  useEffect(function () {
    getCategoryDetails();
  }, []);

  return (
    <>
      {CategoryDetails ? (
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3 ">
              <img src={category.image} />
            </div>
            <div className=" col-md-9">
              <h2>{category.name}</h2>
              <p>{category.slug}</p>
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
