import React from "react";

import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return <div className="footer">Copyright &copy;{year}, Pich</div>;
};

export default Footer;
