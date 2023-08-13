import styles from "./Categories.module.css";
import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Categories() {
  const [categories, setCategories] = useState([]);
  async function getCategories() {
    let { data } = await axios.get(
      `https://route-ecommerce.onrender.com/api/v1/categories`
    );
    setCategories(data.data);
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="row mt-5">
        <h1 className="d-flex justify-content-center align-content-center">
          Shop By Category
        </h1>
        {categories.map((category) => {
          return (
            <div
              key={category._id}
              className="card1 cursor-pointer px-2 py-4 mt-3 col-md-2"
            >
              <Link
                to="CategoryDetails"
                state={{ CategoryDetails: category._id }}
              >
                <div>
                  <img
                    width={"300px"}
                    height={"300px"}
                    className="w-100"
                    src={category.image}
                    alt=""
                  />

                  <span className="text-main fw-bold font-sm">
                    {category?.data?.name}
                  </span>
                  {/* <h3 className="h6 fw-bolder">{brand.title}</h3> */}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Categories;
