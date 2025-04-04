
export const CategorySection = () => {
  const categories = [
    { name: "Smuči", icon: "🎿", count: 328 },
    { name: "Snowboardi", icon: "🏂", count: 145 },
    { name: "Smučarski čevlji", icon: "👢", count: 267 },
    { name: "Oblačila", icon: "🧥", count: 193 },
    { name: "Čelade", icon: "⛑️", count: 82 },
    { name: "Očala", icon: "🥽", count: 64 },
  ];

  return (
    <div className="section bg-gray-50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Kategorije</h2>
        <p className="text-gray-600 text-center mb-10">Raziskujte po kategorijah in najdite, kar potrebujete</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href="#" 
              className="bg-white rounded-lg p-6 text-center shadow-sm card-hover flex flex-col items-center"
            >
              <span className="text-4xl mb-3">{category.icon}</span>
              <h3 className="font-medium text-lg mb-1">{category.name}</h3>
              <span className="text-sm text-gray-500">{category.count} oglasov</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
