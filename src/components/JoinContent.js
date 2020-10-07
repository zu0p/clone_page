import React, { useState, useEffect, useRef } from "react";
import go from "../images/icon-arrow.svg";
import useForm from "./useForm.js";
import validate from "./validate.js";
import "./JoinContent.css";

const JoinContent = () => {
  const { values, errors, errname, submitting, handleChange, handleSubmit } = useForm({
    initialValues: { email: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate,
  });

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="join_wrapper">
        <div className="comming_soon_wrapper">
          <div id="pink_text">W E ' R E</div>
          <div id="black_text">C O M I N G</div>
          <div id="black_text">S O O N</div>
        </div>
        <div className="detail_wrapper">
          <div>
            Hello fellow shoppers! We're currently building our new fashon
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </div>
        </div>
 
        <input
          type="email"
          name="email"
          value={values.email}
          className={errname}
          onChange={handleChange}
          placeholder="Email Address"
        />

        <button className="btn">
          <img src={go} alt="btnImage" />
        </button>

        <div>
          {errors.email && <span className="errorMessage">{errors.email}</span>}
        </div>

      </div>
    </form>
  );
}; 

export default JoinContent;