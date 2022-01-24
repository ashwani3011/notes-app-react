import { Link } from "react-router-dom";
import "./Navbar.css";

//pages & Component

import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <p>Notes </p>
      </Link>
      <SearchBar />
      <Link to="/create" style={{ textDecoration: "none" }}>
        <button className="btn-create-notes">Create Notes</button>
      </Link>
    </div>
  );
}
