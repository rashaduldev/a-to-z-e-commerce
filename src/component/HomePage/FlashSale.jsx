
const FlashSale = () => {
  const products = [
      {
        name: "Mibro lite smart watch global version",
        price: 1200,
        oldPrice: 1500,
        discount: "15% off",
        sales: 15,
        rating: 5,
        image: "https://via.placeholder.com/150",
      },   {
        name: "Mibro lite smart watch global version",
        price: 1200,
        oldPrice: 1500,
        discount: "15% off",
        sales: 15,
        rating: 5,
        image: "https://via.placeholder.com/150",
      },   {
        name: "Mibro lite smart watch global version",
        price: 1200,
        oldPrice: 1500,
        discount: "15% off",
        sales: 15,
        rating: 5,
        image: "https://via.placeholder.com/150",
      },   {
        name: "Mibro lite smart watch global version",
        price: 1200,
        oldPrice: 1500,
        discount: "15% off",
        sales: 15,
        rating: 5,
        image: "https://via.placeholder.com/150",
      },   {
        name: "Mibro lite smart watch global version",
        price: 1200,
        oldPrice: 1500,
        discount: "15% off",
        sales: 15,
        rating: 5,
        image: "https://via.placeholder.com/150",
      },   {
        name: "Mibro lite smart watch global version",
        price: 1200,
        oldPrice: 1500,
        discount: "15% off",
        sales: 15,
        rating: 5,
        image: "https://via.placeholder.com/150",
      },   {
        name: "Mibro lite smart watch global version",
        price: 1200,
        oldPrice: 1500,
        discount: "15% off",
        sales: 15,
        rating: 5,
        image: "https://via.placeholder.com/150",
      },   {
        name: "Mibro lite smart watch global version",
        price: 1200,
        oldPrice: 1500,
        discount: "15% off",
        sales: 15,
        rating: 5,
        image: "https://via.placeholder.com/150",
      },
      // Add more product objects here
  ];

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Flash Sale</h2>
        <a href="#" className="text-orange-500 hover:underline">See All</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
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
     <div className="">
     <img className="w-full h-[357px] py-10"  src="https://i.ibb.co.com/kGtY6rC/image.jpg" alt="" />
     </div>
    </div>
  );
};

export default FlashSale;
