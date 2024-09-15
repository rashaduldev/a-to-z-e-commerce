const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">AtoZ Bazar</h3>
          <p>Office Address: A to Z Bazar, Room No-503, Level-4, Nahar Plaza, Hatirpool, Dhaka-1000</p>
          <a
            href="https://www.google.com/maps"
            className="text-orange-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Location
          </a>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Accounts */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Accounts</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Sign In
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Create Account
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                My Cart
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                My Orders
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Return & Refund Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Payment Options */}
      <div className="container mx-auto mt-10 flex justify-between items-center">
        <div className="text-gray-500">
          Copyright &copy; 2022 AtoZ Bazar. All Rights Reserved.
        </div>
        <div className="flex space-x-4">
          {/* Add your payment method icons here */}
          <img src="/path-to-visa.png" alt="Visa" className="h-6" />
          <img src="/path-to-mastercard.png" alt="Mastercard" className="h-6" />
          <img src="/path-to-bkash.png" alt="bKash" className="h-6" />
          {/* Add more as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
