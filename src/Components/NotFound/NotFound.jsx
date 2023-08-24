
import { images } from "../../Constants";
import "./NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  
  return (
    <div className="notfound">
      <div className="notfound-logo">
        <img src={images.logo} alt="busteki_logo" />
      </div>
      <div className="notfound-image">
        <img src={images.notfound} alt="notfound" />
      </div>
      <div className="notfound-message">
        <h3>Oops! page your looking is not found</h3>
        <b>
          back to{" "}
          <Link className="notfound-a" to={"/"}>
            home page
          </Link>
        </b>
      </div>
    </div>
  );
}

export default NotFound;
