import { Link } from "remix";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-link-wrapper">
        <Link to={""} className="nav-link">
          HOME
        </Link>
      </div>
      <div className="nav-link-wrapper">
        <Link to={"topics"} className="nav-link">
          All Topics
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
