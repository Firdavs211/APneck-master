import { NavLink } from "react-router-dom";
import "./category.scss";

const Category = () => {
  return (
    <div className="container">
      <ul className="category">
        <li>
          <NavLink
            className="category__link"
            to="/holiday-gifting"
            activeClassName="active"
          >
            Holiday Gifting
          </NavLink>
        </li>
        <li>
          <NavLink
            className="category__link"
            to="/new-arrivals"
            activeClassName="active"
          >
            New Arrivals
          </NavLink>
        </li>
        <li>
          <NavLink
            className="category__link"
            to="/best-sellers"
            activeClassName="active"
          >
            Best-Sellers
          </NavLink>
        </li>
        <li>
          <NavLink
            className="category__link"
            to="/clothing"
            activeClassName="active"
          >
            Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            className="category__link"
            to="/tops-sweaters"
            activeClassName="active"
          >
            Tops & Sweaters
          </NavLink>
        </li>
        <li>
          <NavLink
            className="category__link"
            to="/pants-jeans"
            activeClassName="active"
          >
            Pants & Jeans
          </NavLink>
        </li>
        <li>
          <NavLink
            className="category__link"
            to="/outerwear"
            activeClassName="active"
          >
            Outerwear
          </NavLink>
        </li>
        <li>
          <NavLink
            className="category__link"
            to="/shoes-bags"
            activeClassName="active"
          >
            Shoes & Bags
          </NavLink>
        </li>
        <li>
          <NavLink
            className="category__link"
            to="/sale"
            activeClassName="active"
          >
            Sale
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Category;
