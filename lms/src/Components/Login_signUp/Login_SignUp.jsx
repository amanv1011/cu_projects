import React, { useState, useEffect } from "react";
import "./login_signUp.css";
import axios from "axios";
import { HiMail } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { MdVpnKey } from "react-icons/md";
import Dashboard from "../Dashbaord/Dashboard";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

export default function Login_SignUp() {
  // register state
  const [regUsername, setRegUsername] = useState("");
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  // login state
  const [userEmail, setuserEmail] = useState("");
  const [password, setpassword] = useState("");
  const [googleAuth, setGoogleAuth] = useState(false);

  const [authenticated, setauthenticated] = useState();
  localStorage.getItem(localStorage.getItem("authenticated") || false);

  // registerUser

  async function registerUser(e) {
    await axios
      .post(`http://43.205.202.3/register`, {
        username: regUsername,
        email: regEmail,
        password: regPassword,
        first_name: regName,
      })
      .then(function (response) {
        console.log("$$$$$$$$", response);
        alert("Registered Successfully");
      })
      .catch(function (error) {
        console.log("########", error);
        alert(error.errors);
      });
  }
  // login user

  async function loginUser(e) {
    await axios
      .post("http://43.205.202.3/login", {
        email: userEmail,
        password: password,
      })
      .then(function (response) {
        console.log("$$$$$$$$", response);
        localStorage.setItem("authenticated", true);
        localStorage.setItem("btn", "Logout");

        setauthenticated(true);
      })
      .catch(function (error) {
        console.log("########", error);
        alert("Please enter correct Username / Password");
      });
  }

  // GOOGLE AUTHENTICATION //

  const clientId =
    "549522418070-9f2edlmcvvuj0guri0hpu2jnd5fnl2vu.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const onLoginSuccess = (res) => {
    setGoogleAuth(true);
    localStorage.setItem("profile", JSON.stringify(res.profileObj));
    localStorage.setItem("accessToken", JSON.stringify(res.accessToken));
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const logoutSuccess = () => {
    setGoogleAuth(false);
    setauthenticated(false);
    localStorage.clear();
  };
  return (
    <>
      {authenticated || googleAuth ? (
        <>
          <GoogleLogout
            clientId={clientId}
            buttonText="Sign Out"
            onLogoutSuccess={logoutSuccess}
          ></GoogleLogout>
          <Dashboard />
        </>
      ) : (
        <div className="body">
          <div className="container">
            <input type="checkbox" id="flip" />
            <div className="cover">
              <div className="front">
                <img
                  // style={{ borderRadius: "0 30px 30px 0" }}
                  className="frontImg"
                  id="frontImg"
                  src="https://images.shiksha.com/mediadata/images/1642580468phpQDgPNe.jpeg"
                  alt=""
                />
              </div>
              <div className="back">
                <img
                  className="backImg"
                  id="backImg"
                  src="https://cucet.cuchd.in/cucet-assets/img/loader.png"
                  alt=""
                />
              </div>
            </div>
            <form action="#">
              <div className="form-content">
                <div className="login-form">
                  <div className="title">Login</div>
                  <div className="input-boxes">
                    <div className="input-box">
                      <span className="i">
                        {" "}
                        <HiMail />{" "}
                      </span>
                      <input
                        type="text"
                        placeholder="Enter your email"
                        required
                        value={userEmail}
                        onChange={(e) => setuserEmail(e.target.value)}
                      />
                    </div>
                    <div className="input-box">
                      <span className="i">
                        {" "}
                        <HiMail />{" "}
                      </span>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </div>
                    <div className="text">
                      <a href="#">Forgot Password</a>
                    </div>
                    <div className="button input-box">
                      {/* <HiMail classname= "i" /> */}
                      <input type="button" value="Submit" onClick={loginUser} />

                      {/* GOOGLE AUTHENTICATION */}
                    </div>
                    or
                    <GoogleLogin
                      clientId={clientId}
                      buttonText="Sign In with Google"
                      onSuccess={onLoginSuccess}
                      onFailure={onLoginFailure}
                      cookiePolicy={"single_host_origin"}
                      isSignedIn={true}
                    />
                    <div className="text login-text">
                      Dont have an account ?{" "}
                      <label htmlFor="flip">SignUp Now</label>{" "}
                    </div>
                  </div>
                </div>
                <div className="signUp-form">
                  <div className="title">Sign Up</div>
                  <div className="input-boxes">
                    <div className="input-box">
                      <span className="i">
                        {" "}
                        <FaUserAlt />{" "}
                      </span>
                      <input
                        onChange={(e) => {
                          setRegUsername(e.target.value);
                        }}
                        value={regUsername}
                        type="text"
                        placeholder="Enter your username"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <span className="i">
                        {" "}
                        <FaUserAlt />{" "}
                      </span>{" "}
                      <input
                        onChange={(e) => {
                          setRegName(e.target.value);
                        }}
                        value={regName}
                        type="text"
                        placeholder="Enter your Name"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <span className="i">
                        {" "}
                        <HiMail />{" "}
                      </span>
                      <input
                        onChange={(e) => {
                          setRegEmail(e.target.value);
                        }}
                        value={regEmail}
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <span className="i">
                        {" "}
                        <MdVpnKey />{" "}
                      </span>
                      <input
                        onChange={(e) => {
                          setRegPassword(e.target.value);
                        }}
                        value={regPassword}
                        type="text"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <div className="text"></div>
                    <div className="button input-box">
                      <input
                        type="button"
                        value="Register"
                        onClick={registerUser}
                      />
                    </div>
                  </div>
                  <div className="text signUp-text">
                    Already have an account ?{" "}
                    <label htmlFor="flip">Login Now</label>{" "}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
