

const FeaturedCategories = () => {
  const categories = [
    { name: "iPhone Mobile Cover", icon: "📱" },
    { name: "Apple Airpods", icon: "🎧" },
    { name: "Apple Smart Watch", icon: "⌚" },
    { name: "Electronics", icon: "💻" },
    { name: "iPad & Tabs", icon: "📱" },
    { name: "Smart Home appliance", icon: "🏠" },
  ];

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-md flex items-center justify-center text-center flex-col hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl">{category.icon}</div>
            <span className="mt-2 text-lg font-medium">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
