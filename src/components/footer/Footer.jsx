// @vendors
import { useEffect } from "react";

// @api
import { getIP } from "../../api";

// @styles
import "./footer.scss";
import { useState } from "react";

export const Footer = () => {
  const [IP, setIP] = useState(null);
  useEffect(() => {
    getIP().then((data) => {
      setIP(data);
    });
  }, []);

  console.log("IP TYPE", typeof IP);

  return (
    <div className="footer__container">
      <h2>You are being watch! Your IP Address is:</h2>
      <h4>{IP}</h4>
    </div>
  );
};
