import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/contants";

const Head = () => {
  const [searchQauery, setSearchQauery] = useState("");

  const getSearchSugessions = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQauery);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data[1]);
    } catch (error) {
      console.error("Fetch error: " + error.message);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchQauery) {
        setTimeout(() => getSearchSugessions(), 200);
      }
    }, 3000); // Only invoke after 200ms of inactivity

    return () => clearTimeout(handler); // Clean up in the effect's cleanup function
  }, [searchQauery]); // Effect runs on every change to searchQauery

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 flex justify-between items-center h-16">
        {/* Left section with menu and logo */}
        <div className="flex items-center">
          {/* Hamburger Menu */}
          <img
            className="h-6 mr-6 cursor-pointer"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADX19ewsLDFxcW2trbBwcELCwuWlpbz8/PZ2dnc3NxZWVlsbGzj4+Opqak0NDSfn5+FhYVhYWF9fX0mJiZRUVH39/dycnKOjo4WFhbs7OwdHR3Nzc1GRkZeN5/TAAABVElEQVR4nO3cCW7CMBAF0BB2SllLV0rvf8sGpB7BM+rkvQtEX5Zjx5Nx1wEAAAAAAAAAAAAAAAAAAEC0zdO0re17ar7pc9/carfPC7hun+9hkRXw0PeTCH0/zwl4XcUEHCIecybjKSrgMIjLlIS7sIST/pyS8C0w4UdKwpfAhJeUhJ+BCWcpCbdBi8UQ8OuakrA7h62Hh5yA95kYkHF4Rs6b9OEQsWf7zlkM/9wWs7YW09R8AAAAAP/Fft7YLbE+OlgeA87afhLPoi4B+e5OWQHXYWfeSWXufVzd4nWTknAdWHvKGcTI+qEacBv1x7D+PKz/Lq2/Ho5gTxO1L73lBRxsW39bzHO/LQAAAAD+i+r/6pfvtyjfMxPX95R0JFy/d61+/2H9HtL6NeD6vdz1+/Hr36lQ/16MEdxtMoL7abr6dwwBAAAAAAAAAAAAAAAAAAAwTr/LxSR1bBQKdAAAAABJRU5ErkJggg=="
            onClick={() => toggleMenuHandler()}
            alt="Hamburger Menu"
          />
          {/* YouTube Logo */}
          <img
            className="h-8"
            src="data:image/png;base64,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"
            alt="YouTube logo"
          />
        </div>
        {/* Center section with search */}
        <div className="flex-grow">
          <div className="flex items-center max-w-md mx-auto">
            <input
              className="w-full px-4 py-2 leading-tight rounded-l-full text-gray-700 bg-white border border-gray-300  focus:outline-none focus:bg-white focus:border-blue-500"
              type="text"
              value={searchQauery}
              onChange={(e) => setSearchQauery(e.target.value)}
              placeholder="Search"
            />
            <button className="px-3 bg-red-500 rounded-r-full text-white h-9">
              Search
            </button>
          </div>
        </div>
        {/* Right section with user avatar */}
        <div>
          <img
            className="h-8 w-8 rounded-full"
            src="https://via.placeholder.com/150"
            alt="User avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
