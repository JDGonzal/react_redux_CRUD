import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/create-task"> Create Task</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
