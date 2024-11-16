import { Recycle } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Recycle size={32} />
            <h1 className="text-2xl font-bold">EcoTrack</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#dashboard" className="hover:text-emerald-200 transition">Dashboard</a>
            <a href="#report" className="hover:text-emerald-200 transition">Report Issue</a>
            <a href="#resources" className="hover:text-emerald-200 transition">Resources</a>
          </nav>
        </div>
      </div>
    </header>
  );
}