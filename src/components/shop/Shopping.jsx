import { useState } from "react";
import "./shopping.scss";
import axios from "axios";
import { useEffect } from "react";

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?sort=desc"
        );
        const slicedProducts = response.data.slice(0, 6);
        setProducts(slicedProducts);
        console.log(slicedProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  return (
    <div className="shopping">
      <h2 className="shopping__title">Shop by Category</h2>
      <ul className="shopping__card">
        {products.map((product) => (
          <li key={product.id} onClick={() => openModal(product)}>
            <div>
              <img
                className="shopping__card__img"
                src={product.image}
                alt={product.title}
              />
              {/* <p className="shopping__card__text">{product.title}</p> */}
              <p className="shopping__card__text">
                {product.title.length > 10
                  ? `${product.title.substring(0, 10)}...`
                  : product.title}
                {product.title.length > 10 && (
                  <span onClick={() => openModal(product)}>...</span>
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {selectedProduct && isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <span className="modal__close" onClick={closeModal}>
              &times;
            </span>
            <img
              className="modal__img"
              src={selectedProduct.image}
              alt={selectedProduct.title}
            />
            <h3 className="modal__title">{selectedProduct.title}</h3>
            <p className="modal__description">{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shopping;
