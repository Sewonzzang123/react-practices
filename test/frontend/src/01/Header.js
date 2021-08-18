import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="respond_container">
        <div className="nav_header">
          <button type="button" className="btn_toggle"></button>
          <div className="logo">
            <a href="#">
              <img src="./assets/image/wehago.svg" height="24" alt="MEHAGO" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
