import React from "react";

import "./AppFooter.css";

import bocongthong from "src/assets/images/bo-cong-thuong.png";
import appStore from "src/assets/images/button-app store.png";
import appStore1 from "src/assets/images/button-app store1.png";
import countryImg from "src/assets/images/country.png";
import groupImg from "src/assets/images/group1.png";

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="footer-column company">
        <h3>Viet Hung Auto Production Trading Joint Stock Company</h3>
        <ul>
          <li>
            Tax code: <span>0306094228</span>
          </li>
          <li>
            Address:
            <span>
              13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam
            </span>
          </li>
          <li>
            Phone number:
            <span>0283 760 7607</span>
          </li>
          <li>
            Opening hour:
            <span>09:00 - 22:00 from Mon - Fri</span>
          </li>
        </ul>
        <img
          src={bocongthong}
          alt="Da Thong Bao"
          className="certification"
          style={{ width: 200 }}
        />
        {/* Thay bằng đường dẫn ảnh thực tế */}
      </div>
      <div className="footer-column sitemap">
        <h2>Sitemap</h2>
        <ul>
          <li>About</li>
          <li>Article</li>
          <li>Cart</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-column legal">
        <h2>Legal</h2>
        <ul>
          <li>Privacy Policy</li>
          <li>Cookie policy</li>
          <li>Delivery policy</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="footer-column download">
        <div className="app-buttons">
          <h2>Download App</h2>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={appStore}
              alt="Get it on Google Play"
              className="app-store"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={appStore1}
              alt="Download from Apple App Store"
              className="app-store"
            />
          </a>
        </div>
        <button className="language-toggle">
          <img src={countryImg} alt="default" /> VI
          <img src={groupImg} alt="default" />
        </button>
      </div>
    </footer>
  );
};

export default AppFooter;
