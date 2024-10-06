import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className="container mx-auto">
      <div className="flex items-center justify-between gap-10 py-4">
       <div className="flex w-full md:w-[55%] items-center gap-6">
           {/* Logo */}
        <div className="flex items-center">
          <img src="https://i.ibb.co.com/5Tn8NK6/logo.png" alt="AtoZ Bazar" className="h-20 w-20 mr-2" />
        </div>
        <div className="w-full relative">
          <input className="w-full border px-[16px] py-2 rounded-l" type="text" placeholder="Seach iphone cover & accessories" />
          <button className="absolute -right-5 top-[0px] btn srcc px-3 py-[13px] rounded-r"><CiSearch /></button>
        </div>

        {/* Search Bar */}
        {/* <div className="relative">
          <input
            type="text"
            placeholder="Search iphone cover & accessories"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <button className="absolute right-0 top-0 mt-2 mr-2 bg-orange-600 text-white p-2 rounded-full">
            <i className="fas fa-search"/>

          </button>
        </div> */}
       </div>
        {/* Menu */}
        <nav className="hidden md:flex items-center gap-4">
          <a href="#" className="primaryButton">
          <img className="w-[24px] h-[24px]" src="https://i.ibb.co.com/pfgDYjG/love.png" alt="" />
            Wishlist
          </a>
          <a href="#" className="primaryButton">
            <img className="w-[24px] h-[24px]" src="https://i.ibb.co.com/zNf0g5d/cart.png" alt="" />
            Cart (0)
          </a>
          <a href="#" className="primaryButton">
            <img className="w-[24px] h-[24px]" src="https://i.ibb.co.com/Mp2L2Pg/man.png" alt="" />
            Account
          </a>
          <a href="tel:+880176551776155" className="text-[#FD5700] border px-[22px] py-[11px] flex items-center gap-2">
            <img className="w-[24px] h-[24px]" src="https://i.ibb.co.com/B3wHkvn/call.png" alt="" />
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
      <div className="py-2">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4">
        <img className="h-[32px] w-[3
        2px]" src="https://i.ibb.co.com/JFKKL7j/menu.png" alt="" />
        <div className="flex items-center gap-4 justify-between text-[16px] font-[400] leading-6">
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
        <div>
          <button className="btn px-[22px] py-[11px] rounded-lg">Get offer</button>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
