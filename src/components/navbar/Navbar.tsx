import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  searchPlaceholder?: string;
  onSearchChange: (query: string) => void;
  showSearchButton?: boolean;
  showPlusButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  searchPlaceholder = "🔍 Search a movies or a series",
  onSearchChange,
  showSearchButton,
  showPlusButton,
}) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const decodedQuery = decodeURIComponent(location.search.slice(7));
    setSearchQuery(decodedQuery);
  }, [location.search]);

  const toggleSearch = () => {
    setIsSearchVisible(prev => !prev);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const encodedQuery = encodeURIComponent(searchQuery);
    navigate(`/search?query=${encodedQuery}`);
    onSearchChange(searchQuery);
  };

  return (
    <nav>
      <div className="container flex items-center justify-between">
        <div className="text-caros font-semibold text-[35px] w-[600] ml-[20px] mt-[47px] ">
          <Link to="/">
            The <br />
            Movie <br />
            Tracker
          </Link>
        </div>
        <div className="flex-grow flex items-center justify-center sm:hidden">
          {showSearchButton && (
            <button
              className="text-white focus:outline-none"
              onClick={toggleSearch}
              aria-label="Toggle Search"
            >
            </button>
          )}
          {showPlusButton && (
            <button
              className="text-black ms-1 focus:outline-none"
              style={{
                fontFamily: "Caros-Bold",
                fontSize: "30px",
                fontWeight: 700,
              }}
              aria-label="Add New Item"
            >
              +
            </button>
          )}
        </div>
        <div className={`flex-grow items-center justify-center sm:flex ${isSearchVisible ? '' : 'hidden'}`}>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-2 rounded-[300px] focus:outline-none text-center bg-[#D9D9D9] rounded-[400px] focus:ring focus:border-blue-100 w-[600px]" // Adjust width here
              style={{ fontFamily: "Caros-Bold" }}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
