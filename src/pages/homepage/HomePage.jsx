import React from "react";
import HomeStyle from "./home.module.scss";




export default function HomePage() {
  return (
    <div className="card-cover mx-3 mt-5">
      <input type="Checkbox" />
      <div className="card cardbody">
        <img src="duasijoli.jpeg" alt="New Watch" className="img-thumbnail" />
      </div>
      <div className="card-text">
        <h1>
          Nemesis <span>One</span>
        </h1>
        <p>Your Product Description Goes Here</p>
        <ul>
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
          <li>
            <i className="fab fa-instagram"></i>
          </li>
          <li>
            <i className="fab fa-twitter"></i>
          </li>
          <li>
            <i className="bi bi-bag-check"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
