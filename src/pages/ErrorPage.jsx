import { Link } from "react-router-dom";
import { copy } from "../copy";

const ErrorPage = () => {
  return (
    <div className="error-block">
      {copy.notFoundError}
      <Link to="/" className="link-style">
        Go to HomePage
      </Link>
    </div>
  );
};

export default ErrorPage;
