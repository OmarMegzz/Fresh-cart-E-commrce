import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Brands.module.css";
import { Link } from "react-router-dom";
function Brands() {
  const [brands, setBrands] = useState([]);
  async function getBrands() {
    let { data } = await axios.get(
      `https://route-ecommerce.onrender.com/api/v1/brands`
    );
    setBrands(data.data);
  }
  useEffect(() => {
    getBrands();
  }, []);

  return (
    <>
      <div className="row mt-5">
        {brands.map((brand) => {
          return (  
            <div
              key={brand._id}
              className="card cursor-pointer px-2 py-4 col-md-2"
            >
              <Link to="BrandsDetails" state={{ BrandsDetails: brand._id }}>
                <div>
                  <img className="w-100" src={brand.image} alt="" />

                  <span className="text-main fw-bold font-sm">
                    {brand?.data?.name}
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
export default Brands;
