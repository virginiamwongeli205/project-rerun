export function Stats() {
const stats = [
{ value: "10k+", label: "Happy Customers" },
{ value: "500+", label: "Daily Orders" },
{ value: "100%", label: "Fresh Guarantee" },
];


return (
<section className="bg-green-600 text-white py-12">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 text-center gap-6">
{stats.map((s) => (
<div key={s.label}>
<p className="text-3xl font-bold">{s.value}</p>
<p className="text-sm">{s.label}</p>
</div>
))}
</div>
</section>
);
}