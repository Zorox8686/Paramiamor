import { useState } from 'react';
import { Camera, MapPin, Send } from 'lucide-react';

export default function ReportForm() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    wasteType: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Report Waste Issue</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              Location
            </div>
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Waste Type</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={formData.wasteType}
            onChange={(e) => setFormData({ ...formData, wasteType: e.target.value })}
            required
          >
            <option value="">Select type</option>
            <option value="organic">Organic</option>
            <option value="plastic">Plastic</option>
            <option value="glass">Glass</option>
            <option value="metal">Metal</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
        </div>

        <div>
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition"
          >
            <Camera size={16} />
            Upload Photo
          </button>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
        >
          <Send size={16} />
          Submit Report
        </button>
      </form>
    </div>
  );
}