import React from "react";

const bikes = [
  {
    id: 1,
    name: "Mountain Bike",
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Road Bike",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Electric Bike",
    image:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=80",
  },
];

const OurBikes = () => {
  return (
    <section className="bg-gray-100 py-10 px-6">
      <h2 className="text-center text-xl font-bold mb-6">Our Bikes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {bikes.map((bike) => (
          <div
            key={bike.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-4 py-3">
              <p className="text-sm font-medium">{bike.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBikes;
