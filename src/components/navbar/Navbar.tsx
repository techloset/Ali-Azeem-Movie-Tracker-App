import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { NavbarProps } from "../../types/types";
import Bookmark from "../../assets/icons/Bookmark.png";

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
    setIsSearchVisible((prev) => !prev);
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
      <div className="bg-[#EBEAEA] ">
        <div className="container flex items-center justify-between">
          <div className="text-caros text-bold font-semibold text-[35px] w-[600] md:ml-[60px] input:pl-[20px]  mt-[40px] ">
            <Link to="/">
              The <br />
              Movie <br />
              Tracker
            </Link>
          </div>
          <div className="flex-grow flex items-center justify-end sm:hidden">
            {showSearchButton && (
              <Link to="/search">
                <button className=" bg-input h-[37px] w-[39px] rounded-[30px] focus:outline-none text-[20px] font-bold">
                  <span className="w-[14px] h-[20px]">🔍</span>
                </button>
              </Link>
            )}
            {showPlusButton && (
              <button className=" ms-[20px] text-center  bg-input h-[37px] w-[39px] rounded-[30px] focus:outline-none  font-bold">
                <img src={Bookmark} className="ps-2.5" alt="Plus Icon Image" />
              </button>
            )}
          </div>
          <div
            className={`flex-grow items-center justify-center sm:flex ${
              isSearchVisible ? "" : "hidden"
            }`}
          >
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-4 py-2 rounded-[300px] focus:outline-none text-center font-family:Caros-Bold bg-gray-300 rounded-full focus:ring focus:border-blue-100 w-[600px]"
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
