export function Products() {
  const products = [
    {
      name: "Apples",
      price: "$4.99/kg",
      img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Bananas",
      price: "$2.49/dozen",
      img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Oranges",
      price: "$3.99/kg",
      img: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold mb-6">Popular Fruits</h3>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.name} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src={p.img}
              alt={p.name}
              className="h-40 w-full object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h4 className="font-semibold">{p.name}</h4>
              <p className="text-sm text-gray-600">{p.price}</p>
              <button className="mt-3 w-full border border-green-600 text-green-600 py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}