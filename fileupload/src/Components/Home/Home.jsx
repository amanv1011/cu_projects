import React from "react";
import "./home.css";

export default function Home() {
  return (
    <>
      <div class="header">
        <img
          style="margin: 20px 30px;"
          src="https://www.cuchd.in/includes/assets/images/header-footer/cu-logo-white.webp"
          alt="logo"
        />

        <a
          href=""
          class="btn btn-danger"
          style=" width: 120px; border-radius: 30px; margin: 5px 30px; font-weight: 600; "
        >
          Log in
        </a>
      </div>
      <div class="div">
        <h3>Welcome !!!</h3>
        <p>Kindly Visit Once To Check The References !!!</p>
        <a
          class="button"
          style="text-decoration: none; color: aliceblue;"
          href="./view.html"
        >
          Browse Courses
        </a>
      </div>
    </>
  );
}
