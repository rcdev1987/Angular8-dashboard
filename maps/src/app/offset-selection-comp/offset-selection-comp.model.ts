export default interface OffsetSelectionComp {
}

export interface House {
  House_id: number;
  House_name: string;
  geo_latitude: number;
  geo_longitude: number;
  distance: number;
  totalTIme: number;
  timePerFt: number;
  nptTime: Date;
  nptFraction: number;
  totalCost: number;
  mdDepth: number;
  age: number;
  costPerFt: number;
}