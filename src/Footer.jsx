import { NavLink } from "react-router-dom";
import  "./Styles/Footer.css"
function Footer() {
  return (
    <>
      <div className="footer">
        <NavLink className="homebtn "  to="/">
        <img className="homeimg" src="../src/assets/home.svg" alt="" />
        </NavLink>
     
        </div>
    </>       
  );
}

export default Footer;
