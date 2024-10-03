const Navbar = () => {
  return (
    <header className="">
      <div className="mx-[312px] flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="https://i.ibb.co.com/5Tn8NK6/logo.png" alt="AtoZ Bazar" className="h-20 w-20 mr-2" />
          <span className="text-xl font-semibold text-orange-600">AtoZ Bazar</span>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search iphone cover & accessories"
            className="border border-gray-300 rounded-full px-4 py-2 w-72"
          />
          <button className="absolute right-0 top-0 mt-2 mr-2 bg-orange-600 text-white p-2 rounded-full">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-orange-600">
            Wishlist
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-600">
            Cart (0)
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-600">
            Account
          </a>
          <a href="tel:+880176551776155" className="text-gray-700 hover:text-orange-600">
            0176551776155
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto flex justify-around">
          {['iPhone Case', 'Airpods', 'iPhone', 'iMac', 'Smart Light'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-600 hover:text-orange-600 text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
