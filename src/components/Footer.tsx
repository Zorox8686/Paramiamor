import { Github, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">EcoTrack</h3>
            <p className="text-sm">
              Trabajando juntos por una ciudad más limpia y sostenible.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/dashboard" className="hover:text-white transition">Dashboard</a></li>
              <li><a href="/report" className="hover:text-white transition">Reportar</a></li>
              <li><a href="/resources" className="hover:text-white transition">Recursos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                contacto@ecotrack.com
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          © {new Date().getFullYear()} EcoTrack. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}