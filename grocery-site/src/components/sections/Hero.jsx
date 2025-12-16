export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-4">
          Fresh Fruits Delivered Daily
        </h2>
        <p className="text-gray-600 mb-6">
          Farm-fresh fruits picked at peak ripeness and delivered fast.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
          Shop Fruits
        </button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1574226516831-e1dff420e43e?auto=format&fit=crop&w=1400&q=80"
        alt="Fresh fruits"
        className="rounded-3xl w-full h-[420px] object-cover"
        loading="lazy"
      />
    </section>
  );
}
