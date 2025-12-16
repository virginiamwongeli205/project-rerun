export function Features() {
const items = [
{ title: "Farm Fresh", desc: "Sourced directly from farmers." },
{ title: "Fast Delivery", desc: "Same-day delivery available." },
{ title: "Quality Checked", desc: "Handpicked and inspected." },
];


return (
<section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
{items.map((f) => (
<div key={f.title} className="bg-white p-6 rounded-2xl shadow-sm">
<h4 className="font-semibold mb-2">{f.title}</h4>
<p className="text-sm text-gray-600">{f.desc}</p>
</div>
))}
</section>
);
}