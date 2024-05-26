import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-block">
      404 Error Page not found!
      <Link to="/" className="link-style">
        Go to HomePage
      </Link>
    </div>
  );
};

export default ErrorPage;
