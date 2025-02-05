import "./style.css";
import React from "react";
import Avatar from "../../src/pic/Avatar.jpg"; // Ensure your avatar image path is correct

function Home() {
  return (
    <div className="brief-card d-flex flex-column justify-content-center align-items-center pt-5">
      <div className="avatar mt-4 mx-4">
        <img src={Avatar} alt="avatar" />
      </div>

      <h3 className="myname mb-0 mt-3">Goutam Tiwari</h3>
      <h4 className="mb-5">Software Engineering Student</h4>

      <div className="icons row p-2 mt-5 d-flex justify-content-center">
        <a
          href="https://github.com/Goutam990"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-github-alt icon-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/goutam-tiwari-3029562a2/"
          rel="noreferrer"
          target="_blank"
        >
          <i
            className="fab fa-linkedin-in icon-linkedin"
            aria-hidden="true"
          ></i>
        </a>

        <a
          href="https://www.facebook.com/goutam.tiwari.123"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-facebook-f icon-fb"></i>
        </a>
        <a
          href="https://www.instagram.com/goutam.tiwari/"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-instagram icon-insta"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
