import { copy } from "../copy";

const Header = () => {
  return (
    <div className="header">
      <h2>{copy.headerText}</h2>
    </div>
  );
};

export default Header;
