export interface WasteReport {
  id: string;
  name: string;
  location: string;
  wasteType: 'organic' | 'plastic' | 'glass' | 'metal' | 'other';
  description: string;
  imageUrl?: string;
  status: 'pending' | 'inProgress' | 'resolved';
  createdAt: Date;
}

export interface ZoneStatistics {
  zone: string;
  totalWaste: number;
  recycledWaste: number;
  lastUpdated: Date;
}