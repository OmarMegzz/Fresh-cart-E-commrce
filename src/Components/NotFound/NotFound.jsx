import React from "react";
import styles from "./NotFound.module.css";

export default function Notfound() {
  const styl = { height: "35vh" };
  return (
    <>
      <h2
        style={styl}
        className=" d-flex  justify-content-center align-items-center py-5  fs-1 text-main  "
      >
        Notfound 404
      </h2>
    </>
  );
}
