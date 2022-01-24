import { useState } from "react";
import { useHistory } from "react-router-dom";

// styles
import "./SearchBar.css";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="search">Search:</label> */}
        <input
          id="search"
          type="text"
          placeholder="Search"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
