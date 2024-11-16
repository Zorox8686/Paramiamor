import { BarChart3, MapPin, Recycle, Trash2 } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Total Reports', value: '1,234', icon: Trash2 },
    { label: 'Recycled Waste', value: '789 kg', icon: Recycle },
    { label: 'Active Zones', value: '15', icon: MapPin },
    { label: 'Monthly Progress', value: '+23%', icon: BarChart3 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Waste Management Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-600 rounded-lg text-white">
                <stat.icon size={24} />
              </div>
              <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
            </div>
            <h3 className="text-gray-600 font-medium">{stat.label}</h3>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Reports</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
              <div>
                <h4 className="font-medium text-gray-800">Plastic Waste Accumulation</h4>
                <p className="text-sm text-gray-600">Green Valley, Zone {index + 1}</p>
              </div>
              <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full">
                In Progress
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}