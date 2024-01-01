import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg";
import { FiSearch } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import Category from "./Category";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <ul className="navbar__ul">
            <li>
              <NavLink
                className="navbar__ul__link"
                to="/women"
                activeClassName="active"
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar__ul__link"
                to="/men"
                activeClassName="active"
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar__ul__link"
                to="/about"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar__ul__link"
                to="/everworldstories"
                activeClassName="active"
              >
                Everworld Stories
              </NavLink>
            </li>
          </ul>
          <NavLink className="navbar__everlane" to="/" activeClassName="active">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="navbar__right">
            <FiSearch />
            <RiUser3Line />
            <MdOutlineShoppingCart />
          </div>
        </div>
      </div>
      <hr />
      <Category />
    </nav>
  );
};

export default Navbar;
