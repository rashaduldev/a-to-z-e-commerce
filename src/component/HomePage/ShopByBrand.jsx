import  { useState } from 'react';
import { FaApple, FaOpencart } from 'react-icons/fa';
import { SiOneplus, SiSamsung, SiSony, SiVivo, SiXiaomi } from 'react-icons/si';

const brands = [
  { id: 1, name: 'Apple', icon: <FaApple size={40} /> },
  { id: 2, name: 'Vivo', icon: <SiVivo size={40} /> },
  { id: 3, name: 'Oppo', icon: <FaOpencart size={40} /> },
  { id: 4, name: 'OnePlus', icon: <SiOneplus size={40} /> },
  { id: 5, name: 'Samsung', icon: <SiSamsung size={40} /> },
  { id: 6, name: 'Sony', icon: <SiSony size={40} /> },
  { id: 7, name: 'Xiaomi', icon: <SiXiaomi size={40} /> },
];

const products = {
  Apple: [
    { id: 1, title: 'Apple Mobile Iphone 15 (256gb Ram)', price: '৳ 1200', img: '/path/to/iphone-image.png', rating: 5, sales: 15 },
    { id: 2, title: 'IPad 2022 (10th Generation)', price: '৳ 1300', img: '/path/to/ipad-image.png', rating: 4.5, sales: 12 },
    { id: 3, title: 'AirPods Pro USB-C (2nd Generation)', price: '৳ 800', img: '/path/to/airpods-image.png', rating: 5, sales: 10 },
    { id: 4, title: 'Mibro Lite Smart Watch Global Version', price: '৳ 700', img: '/path/to/mibro-watch-image.png', rating: 4, sales: 8 },
  ],
  Vivo: [
    { id: 1, title: 'Vivo Phone XYZ', price: '৳ 1000', img: '/path/to/vivo-product.png', rating: 4, sales: 10 },
    { id: 2, title: 'Vivo Phone ABC', price: '৳ 900', img: '/path/to/vivo-product2.png', rating: 4.2, sales: 8 },
    { id: 3, title: 'Vivo Phone 123', price: '৳ 850', img: '/path/to/vivo-product3.png', rating: 4.3, sales: 9 },
    { id: 4, title: 'Vivo Phone 456', price: '৳ 1100', img: '/path/to/vivo-product4.png', rating: 4.7, sales: 11 },
  ],
  // Add other brands' products similarly
};

const ShopByBrands = () => {
  const [activeBrand, setActiveBrand] = useState('Apple');

  return (
    <div className=" p-4 mb-10">
      <h2 className="text-2xl font-semibold mb-4">Shop By Brands</h2>

      {/* Brand Scroller */}
      <div className="flex overflow-x-scroll space-x-4 mb-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className={`cursor-pointer p-2 ${activeBrand === brand.name ? 'border-b-4 border-orange-500' : ''}`}
            onClick={() => setActiveBrand(brand.name)}
          >
            {brand.icon}
          </div>
        ))}
      </div>

      {/* Products Display (show 4 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products[activeBrand]?.slice(0, 4).map((product,index) => (  // Show 4 cards only
          <div
          key={index}
          className="p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow"
        >
          <div className="relative">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              {product.discount}
            </span>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
          <div className="mt-4">
           <div className="flex items-center">
              <h3 className="text-md font-medium">{product.name}</h3>
              <span className="text-gray-500 text-sm">💼 {product.sales} Sales</span>
           </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-gray-400 line-through">৳ {product.oldPrice}</span>
              <span className="text-orange-500 font-bold">৳ {product.price}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              
              <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 py-2 bg-gray-200 text-sm rounded-md">Add to Cart</button>
              <button className="flex-1 py-2 bg-orange-500 text-white text-sm rounded-md">Buy Now</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrands;
