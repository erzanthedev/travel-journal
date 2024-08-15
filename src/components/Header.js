import globe from "../assets/globe-icon.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header-logo" src={globe} alt="globe icon" />
      <h4 className="header-title">my travel journal.</h4>
    </header>
  );
};

export default Header;
