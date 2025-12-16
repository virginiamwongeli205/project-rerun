export function Footer() {
return (
<footer className="bg-gray-900 text-gray-300 py-10">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
<div>
<h4 className="text-white font-bold">FreshMart</h4>
<p className="text-sm mt-2">Fresh fruits, healthier life.</p>
</div>
<div>
<h5 className="text-white font-semibold">Links</h5>
<ul className="text-sm space-y-1 mt-2">
<li>Products</li>
<li>About</li>
<li>Contact</li>
</ul>
</div>
<div>
<h5 className="text-white font-semibold">Support</h5>
<p className="text-sm">support@freshmart.com</p>
</div>
</div>
<p className="text-center text-xs text-gray-500 mt-6">© 2025 FreshMart</p>
</footer>
);
}