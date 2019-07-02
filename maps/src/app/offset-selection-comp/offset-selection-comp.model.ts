export interface OffsetSelectionComp {
}

export default interface House {
  house_id: number;
  house_name: string;
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
