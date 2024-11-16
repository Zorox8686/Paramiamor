import { ArrowRight, Leaf, MapPin, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: MapPin,
      title: 'Reporta Problemas',
      description: 'Identifica y reporta problemas de residuos en tu comunidad.'
    },
    {
      icon: Recycle,
      title: 'Seguimiento en Tiempo Real',
      description: 'Monitorea el estado de los reportes y el progreso de reciclaje.'
    },
    {
      icon: Leaf,
      title: 'Impacto Ambiental',
      description: 'Contribuye a la sostenibilidad de tu ciudad.'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Gestión Inteligente de
          <span className="text-green-600"> Residuos Urbanos</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Optimiza la gestión de residuos en tu comunidad con datos en tiempo real y herramientas colaborativas.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/report"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Reportar Problema
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-6 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition"
          >
            Ver Estadísticas
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <feature.icon className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Nuestro Impacto</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">1,234</div>
            <div className="text-gray-600">Problemas Resueltos</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">89%</div>
            <div className="text-gray-600">Tasa de Reciclaje</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">15</div>
            <div className="text-gray-600">Zonas Activas</div>
          </div>
        </div>
      </section>
    </div>
  );
}