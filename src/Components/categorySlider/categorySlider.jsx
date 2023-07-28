import React, { useEffect, useState } from "react";
import styles from "./categorySlider.module.css";
import axios from "axios";
import Slider from "react-slick";

function CategorySlider() {
  const [categories, setcategories] = useState([]);
  async function getCategoories() {
    let { data } = await axios.get(
      `https://route-ecommerce.onrender.com/api/v1/categories`
    );
    setcategories(data.data);
  }
  useEffect(() => {
    getCategoories();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {categories?.map((category) => (
          <div className=" w-100 h-100 mt-5" key={category._id}>
            <img className="w-100 h-100" src={category.image} />
            <h2 className="h6 pt-2 w-100">{category.name}</h2>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default CategorySlider;
