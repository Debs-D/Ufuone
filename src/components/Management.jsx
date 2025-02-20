import { Link } from "react-router-dom";
import Header from "./Header";

const Management = () => {
  return (
    <>
      <Header />

      <div className="p-6 max-sm:p-0">
        <Link to="/"></Link>
      </div>
    </>
  );
};

export default Management;
