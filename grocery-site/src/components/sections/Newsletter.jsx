import { Button } from "../common/Button";
export function Newsletter() {
return (
<section className="bg-gray-100 py-12">
<div className="max-w-xl mx-auto px-6 text-center">
<h4 className="text-2xl font-bold mb-2">Join our Newsletter</h4>
<p className="text-gray-600 mb-4">Get weekly fruit deals and health tips.</p>
<div className="flex gap-2">
<input className="flex-1 px-4 py-2 rounded-xl" placeholder="Email address" />
<Button>Subscribe</Button>
</div>
</div>
</section>
);
}