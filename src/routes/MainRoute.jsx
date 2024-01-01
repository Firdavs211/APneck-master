import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Collection from "../pages/Collection";
import Footer from "../components/footer/Footer";
import Women from "../pages/women/Women";
import Men from "../pages/men/Men";
import About from "../pages/about/About";
import Stories from "../pages/stories/Stories";
import NotFound from "../pages/NotFound";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/about" element={<About />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MainRoute;
