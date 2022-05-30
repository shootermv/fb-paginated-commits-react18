import "./Loader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
export default function Loader() {
  return <FontAwesomeIcon icon={faSpinner} className={"fa-spin"} />;
}
