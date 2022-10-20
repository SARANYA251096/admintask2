import axios from "axios";
import { useFormik } from "formik";
import React from "react";

function Usercreate() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      state: "",
      city: "",
      phone: "",
      dob: "",
      gender: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.name) {
        error.name="Please enter a value"
      }

      if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
        error.name="Username must between 3 to 15 characters"
      }

      if(!values.email){
        error.email="Please enter an email"
      }

      if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email="Please enter a valid email";
      }

      if(values.phone.toString().length !== 10){
        error.phone="Please enter a valid Phone number"
      }

      let age= new Date().getFullYear() - parseInt(values.dob.split("-")[0])
      console.log(age);
      
      return error;
    },



    onSubmit: async (values) => {
      try {
        const userdata = await axios.post(
          "https://634ea79af34e1ed82692802b.mockapi.io/users",
          values
        );
        alert("Success");
      } catch (error) {
        alert("Error");
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label><b>User name *</b></label>
              <input
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type={"text"}
                className={`form-control ${formik.touched.name && formik.errors.name ? "error-box" : ""} ${formik.touched.name && !formik.errors.name ? "success-box" : ""}`}
                
              />
             
              {
                formik.touched.name && formik.errors.name ? (<span style={{color:'red'}}>{formik.errors.name}</span>) : null
              }
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label><b>E-mail *</b></label>
              <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type={"text"}
                className={`form-control ${formik.errors.email ? "error-box" : ""} ${formik.touched.email && !formik.errors.email ? "success-box" : ""}`}
              />
               {
                formik.errors.email ? (<span style={{color:'red'}}>{formik.errors.email}</span>) : null
              }
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label><b>Country</b></label>
              <select
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                className="form-control"
              >
                <option>India</option>
                <option>Americ</option>
                <option>China</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label><b>State</b></label>
              <select
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
                className="form-control"
              >
                <option>India</option>
                <option>America</option>
                <option>China</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label><b>City</b></label>
              <select
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                className="form-control"
              >
                <option>India</option>
                <option>America</option>
                <option>China</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label><b>Phone number</b></label>
              <input
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type={"number"}
                className={`form-control ${formik.touched.phone && formik.errors.phone ? "error-box" : ""} ${formik.touched.phone && !formik.errors.phone ? "success-box" : ""}`}
              />
              {
                formik.touched.phone && formik.errors.phone ? (<span style={{color:'red'}}>{formik.errors.phone}</span>) : null
              }
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label><b>Date Of Birth</b></label>
              <input
                name="dob"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                type={"date"}
                className={`form-control ${formik.touched.dob && formik.errors.dob ? "error-box" : ""} ${formik.touched.dob && !formik.errors.dob ? "success-box" : ""}`}
              />
               {
                formik.touched.dob && formik.errors.dob ? (<span style={{color:'red'}}>{formik.errors.dob}</span>) : null
              }
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label><b>Gender</b></label>
              <select
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                className="form-control"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <input type={"Submit"} className="btn btn-primary" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Usercreate;
