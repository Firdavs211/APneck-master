import "./header.scss";
import headerbg from "../../assets/image/header.jpg";

const Header = () => {
  return (
    <div className="hero">
      <img className="hero__img" src={headerbg} alt="headerbg" />
      <div className="hero__info">
        <h1 className="hero__info__title">Your Cozy Era</h1>
        <p className="hero__info__text">
          Get peak comfy-chic with new winter essentials.
        </p>
        <button className="hero__info__btn">shop now</button>
      </div>
    </div>
  );
};

export default Header;
