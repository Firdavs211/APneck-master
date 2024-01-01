// import "./shopping.scss";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const Shopping = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://fakestoreapi.com/products?sort=desc"
//         );
//         const slicedProducts = response.data.slice(0, 6);
//         setProducts(slicedProducts);
//         console.log(slicedProducts);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="shopping">
//       <h2 className="shopping__title">Shop by Category</h2>
//       <ul className="shopping__card">
//         {products.map((product) => (
//           <li key={product.id}>
//             <div>
//               <img
//                 className="shopping__card__img"
//                 src={product.image}
//                 alt={product.title}
//               />
//               <p className="shopping__card__text">{product.title}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Shopping;
