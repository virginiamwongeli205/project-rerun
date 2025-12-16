import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-green-600 hover:text-green-700 transition"
        >
          FreshMart
        </Link>

        <Navigation />
      </div>
    </Header>
  );
}
