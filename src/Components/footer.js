import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="footer-Container">
        <div className="footer">
          <div className="Back-to-top">
            <button type="button" onClick={() => Navigate("/")}>
              Back to top
            </button>
          </div>
          <div className="footer-main">
            <div className="col">
              <ul>
                <li className="footer-head">Get to Know us</li>
                <li>About us</li>
                <li>Careers</li>
                <li>Press Releases</li>
                <li>AmaZone Science</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="footer-head">Connect with Us</li>
                <li>facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="footer-head">Make Money with Us</li>
                <li>Sell on Amazon</li>
                <li>Sell under Amazon Accelerator</li>
                <li>Amazon Global Selling</li>
                <li>Become an Affiliate</li>
                <li>Fulfilment by Amazon</li>
                <li>Advertise Your Products</li>
                <li>Amazon Pay on Merchants</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="footer-head">Let Us Help You</li>
                <li>COVID-19 and Amazon</li>
                <li>Your Account</li>
                <li>Returns Centre</li>
                <li>100% Purchase Protection</li>
                <li>Amazon App Download</li>
                <li>Amazon Assistant Download</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
          <div className="footer-logo-language">
            <div className="footer-logo">
              <img src="./amazon-smile.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
