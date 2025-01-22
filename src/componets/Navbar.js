import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();


  const handleSearch = (e) =>{
    e.preventDefault();
    navigate(`/search?keywords=${searchQuery}`);
  };

  return (
    <div>
     <h2>BLOG APP</h2>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>

      </form>
    </div>
  )
}

export default Navbar