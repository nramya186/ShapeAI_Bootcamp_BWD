import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {currYear} by RAMYA NAIK</p>
    </footer>
  );
}

export default Footer;
