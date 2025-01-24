import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?keywords=${searchQuery}`);
  };

  return (
    <div className="navbar">
      <h2 className="navbar-title">BLOG APP</h2>

      <form className="navbar-search-form" onSubmit={handleSearch}>
        <input
          className="navbar-search-input"
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button className="navbar-search-button" type="submit">
          Search
        </button>
        <Link to="/add-post">
        <button className="navbar-add-button">Add Post</button>
      </Link>
      </form>
    </div>
  );
}

export default Navbar;
