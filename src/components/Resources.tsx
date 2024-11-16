import { Book, Link as LinkIcon, MapPin } from 'lucide-react';

export default function Resources() {
  const guides = [
    {
      title: 'Guía de Reciclaje',
      description: 'Aprende a separar correctamente los residuos.',
      link: '#'
    },
    {
      title: 'Compostaje Doméstico',
      description: 'Cómo crear tu propio compost en casa.',
      link: '#'
    },
    {
      title: 'Reducción de Residuos',
      description: 'Tips para minimizar tu huella ambiental.',
      link: '#'
    }
  ];

  const locations = [
    {
      name: 'Centro de Reciclaje Norte',
      address: 'Av. Principal 123',
      materials: ['Plástico', 'Vidrio', 'Metal']
    },
    {
      name: 'Punto Verde Sur',
      address: 'Calle Secundaria 456',
      materials: ['Papel', 'Cartón', 'Electrónicos']
    },
    {
      name: 'EcoPunto Central',
      address: 'Plaza Mayor 789',
      materials: ['Orgánicos', 'Baterías', 'Aceites']
    }
  ];

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Book className="text-green-600" />
          Guías y Recursos
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <a
              key={index}
              href={guide.link}
              className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                {guide.title}
                <LinkIcon size={16} className="text-green-600" />
              </h3>
              <p className="text-gray-600">{guide.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <MapPin className="text-green-600" />
          Puntos de Recolección
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {location.name}
              </h3>
              <p className="text-gray-600 mb-4">{location.address}</p>
              <div className="flex flex-wrap gap-2">
                {location.materials.map((material, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}