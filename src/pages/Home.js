import React from "react";

import MainForm from "../shared/MainForm";

import "./Home.css";
import flightboard from "../shared/images/flightboard.jpg";

const Home = () => {
  return (
    <div className="container home">
      <div className="row home-content">
        <div className="col-md-8">
          <h1>Welcome to Pich!</h1>
          <p>
            Se labore officia ullamco a ipsum reprehenderit offendit veniam
            fabulas. Magna philosophari laboris export arbitror. Tempor quamquam
            comprehenderit.Ad eram probant proident et et aliquip eruditionem,
            magna si si quae vidisse o quo ex fugiat fugiat enim. Esse aut hic
            esse quamquam, sed irure relinqueret in a sint mandaremus, ea fugiat
            quibusdam arbitror. Si export possumus arbitrantur. Officia sint
            cupidatat ubi export est cernantur nam quis iis nulla sed fabulas ex
            incurreret sunt litteris incididunt.
          </p>
        </div>
        <div className="col-md-4">
          <div className="mx-auto">
            <img src={flightboard} alt="flightboard" />
          </div>
        </div>
      </div>
      <div className="row home-form">
        <div className="col">
          <MainForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
