import React from "react";

const Head = () => {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 flex justify-between items-center h-16">
        {/* Left section with menu and logo */}
        <div className="flex items-center">
          {/* Hamburger Menu */}
          <img
            className="h-6 mr-6 cursor-pointer"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACeCAMAAAD0W0NJAAAAVFBMVEX///8AAABaWlr19fW0tLTGxsb5+fnr6+tJSUnw8PDe3t7CwsK+vr5RUVEtLS0QEBAmJiZxcXGOjo4fHx9iYmKWlpaHh4d/f3+tra03Nzdra2tERESklVBzAAABnElEQVR4nO3b2W6DMBCFYRMS1pCE7Mv7v2cDCFWVxg53c9r+3xMcDdiZmHEIAAAAAAAA+Headu2kbT5lK7bdbp852e+6bZGsXOUVbVYlKtgcvNNl2SGar/SONikj8XrvYJPeTrdxWxM/7TdmvKN3rtnRSpe7r9pZlesujIG1OIi3lBUvf3mnmr2sdy9cvWPNrubGIr4vhZV3sMnKThdygY7g3ROYb974eE/e2bLsFHm0g7LzTtfF+pVRsT57hjuvk93yELBuNk6a+lM4AAAAAClF7mRBK19sL/3KSX9JfzcIoXU+B3q1qdIJnAJd4wW8eWcb3GLp7t7JJnc7XfnwDjZ52OcYIsWLlK94eseaPa3VUUuc7g0OtfXqeaf69gs/HIg/XPGlIb6xqG/LKuWL/KiptwTqDdW7HXX+JJ5sR4N6Mz8mFP4rBAAAACBKekhJe8RLe0BOe7xQfDhTe7RVfDBY4PxnYo5Viw+li5/ME28p80KE9mUc8atM6vue+DU6lcUR7Vm0r3CqX4BVvz48VlD48jUAAAAAAAD+ni+7UjUqRRf5BQAAAABJRU5ErkJggg=="
            alt="Hamburger Menu"
          />
          {/* YouTube Logo */}
          <img
            className="h-8"
            src="https://via.placeholder.com/150"
            alt="YouTube logo"
          />
        </div>
        {/* Center section with search */}
        <div className="flex-grow">
          <div className="flex items-center max-w-md mx-auto">
            <input
              className="w-full px-4 py-2 leading-tight rounded-l-full text-gray-700 bg-white border border-gray-300  focus:outline-none focus:bg-white focus:border-blue-500"
              type="text"
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
