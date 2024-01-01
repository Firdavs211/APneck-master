import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./women.scss";

const Women = () => {
  const [womenProducts, setWomenProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWomenProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/women%27s%20clothing"
        );
        setWomenProducts(response.data);
      } catch (error) {
        console.error("Error fetching women's products:", error);
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchWomenProducts();
  }, []);

  return (
    <div className="women-container">
      <h2 className="women-title">Women`s Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul className="women-list">
          {womenProducts.map((product) => (
            <li key={product.id} className="women-item">
              <p>{product.title}</p>
              <img src={product.image} alt={product.title} />
            </li>
          ))}
        </ul>
      )}
      <NavLink to="/">
        <h2>Back to Home</h2>
      </NavLink>
    </div>
  );
};

export default Women;
