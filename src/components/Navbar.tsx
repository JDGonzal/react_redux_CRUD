import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex-no-wrap relative flex w-full items-center justify-end bg-neutral-100 py-2">
      <div className="flex w-full flex-wrap items-center justify-end px-3">
        <ul className="list-style-none mr-auto flex flex-cols-2 pl-0 lg:flex-row">
          <li className="mb-4 lg:mb-0 lg:pr-2">
            <Link
              to="/"
              className="text-neutral-100 hover:text-neutral-500 bg-zinc-500 px-2 py-1 rounded-md hover:bg-zinc-900" 
            >
              Home
            </Link>
          </li>
          <li className="mb-4 lg:mb-0 lg:pr-2">
            <Link
              to="/create-task"
              className="text-neutral-200 hover:text-neutral-600 bg-zinc-600 px-2 py-1 rounded-md hover:bg-zinc-950"
            >
              Create Task
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
