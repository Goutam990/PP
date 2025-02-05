import "./style.css";
import React from "react";

function Home() {
  let age = new Date().getFullYear() - 2001;

  return (
    <div className="d-flex flex-column p-4 pt-0">
      <h1 className="my-4 title-aboutme">About Me</h1>
      <div className="row mt-2">
        <div className="col-6">
          <p>
            <b>First Name:</b>
            &nbsp; Goutam
          </p>
          <p>
            <b>Last Name:</b>
            &nbsp; Tiwari
          </p>
          <p>
            <b>Age:</b>
            &nbsp;{age} Years old
          </p>
          <p>
            <b>Address:</b>
            &nbsp; Seoni, Madhya Pradesh, India
          </p>
        </div>

        <div className="col-6">
          <p>
            <b>Nationality:</b>
            &nbsp; Indian
          </p>
          <p>
            <b>Languages:</b>
            &nbsp; Hindi, English
          </p>
          <p className="email">
            <b>Email:</b>
            &nbsp; goutamtiwari09832@gmail.com
          </p>
          <p className="email">
            <b>LinkedIn:</b>
            &nbsp; <a href="https://www.linkedin.com/in/goutamtiwari/" target="_blank" rel="noopener noreferrer">linkedin.com/in/goutamtiwari</a>
          </p>
          <p className="email">
            <b>GitHub:</b>
            &nbsp; <a href="https://github.com/goutamtiwari" target="_blank" rel="noopener noreferrer">github.com/goutamtiwari</a>
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <p className="message">
          Have a nice day, my friend! &nbsp;
          <i className="far fa-heart"></i>
        </p>
      </div>
    </div>
  );
}

export default Home;
