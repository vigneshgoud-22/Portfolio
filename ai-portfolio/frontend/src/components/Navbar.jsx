import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-10 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Vignesh
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/projects" className="hover:text-gray-300">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
