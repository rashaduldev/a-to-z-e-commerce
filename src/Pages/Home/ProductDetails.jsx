import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from route parameters
  const product = {
    id: id,
    name: "Mibro lite smart watch global version",
    price: 1200,
    oldPrice: 1500,
    discount: "15% off",
    sales: 15,
    rating: 5,
    description: "This is a detailed description of the product.",
    image: "https://via.placeholder.com/150",
  };

  return (
    <div className="p-6 container mx-auto">
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full lg:w-1/3 h-80 object-cover rounded"
        />
        <div className="lg:w-2/3">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-orange-500 text-lg font-bold mt-2">
            ৳ {product.price}{" "}
            <span className="line-through text-gray-500 ml-2">
              ৳ {product.oldPrice}
            </span>
          </p>
          <p className="text-sm text-gray-600 mt-2">{product.description}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
            <span className="text-gray-500 text-sm">💼 {product.sales} Sales</span>
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="py-2 px-4 bg-gray-200 text-sm rounded-md">
              Add to Cart
            </button>
            <button className="py-2 px-4 bg-orange-500 text-white text-sm rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
