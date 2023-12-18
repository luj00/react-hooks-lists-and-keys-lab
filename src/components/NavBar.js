import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const Array = links.map(link => {
  return <a href = {`#${link}`} key ={link}>{link}</a>
}
  )
  return <nav>{Array}</nav>;
}

export default NavBar;