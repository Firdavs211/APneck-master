import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./men.scss";

const Men = () => {
  const [menProducts, setMenProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenProducts = async () => {
      try {
        const categoriesResponse = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        const categories = categoriesResponse.data;

        const menCategoryIndex = categories.findIndex(
          (category) => category.toLowerCase() === "men's clothing"
        );

        if (menCategoryIndex !== -1) {
          const menProductsResponse = await axios.get(
            `https://fakestoreapi.com/products/category/${categories[menCategoryIndex]}`
          );
          setMenProducts(menProductsResponse.data);
        }
      } catch (error) {
        console.error("Error fetching men's products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenProducts();
  }, []);

  return (
    <div className="men-container">
      <h2 className="men-title">Men`s Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="men-list">
          {menProducts.map((product) => (
            <li key={product.id} className="men-item">
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

export default Men;
