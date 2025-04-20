import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-[#4713579c] text-base-content py-7">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by FlagshipFaceOff
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
