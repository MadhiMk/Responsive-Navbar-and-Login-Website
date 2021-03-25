import React from "react";
import "./signin.css";
import logo from "../../../signin.svg";
import { SocialIcons } from "./SocialIcons";
export default function SignIn() {
  return (
    <div className="signin-form">
      <div className="leftbar">
        <img src={logo} className="logo" alt="logo" />
        <div style={{ textAlign: "center" }}>
          <p style={{ paddingTop: "10px" }}>Create New Account?</p>
        </div>
      </div>
      <div className="rightbar">
        <form className="form-cls">
          <div className="title-cls">
            <i className="far fa-user-circle user-logo"></i>
            <h3 className="signin-title">Sign In Here!</h3>
          </div>
          <br />
          <div className="input-cls-menu">
            <input
              type="text"
              placeholder="Enter Your Username"
              className="input-cls"
            />
          </div>
          <br />
          <div className="input-cls-menu">
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input-cls"
            />
          </div>
          <div className="button-cls">
            <button className="sign-btn">Sign In</button>
          </div>

          <p style={{ padding: "15px", fontWeight: "bolder" }}>Or</p>
          {SocialIcons.map((data, index) => {
            return (
              <i
                key={index}
                className={data.icon}
                style={{ color: `${data.color}` }}
              />
            );
          })}
        </form>
      </div>
    </div>
  );
}
