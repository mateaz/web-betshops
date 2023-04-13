interface Location {
  lat: number;
  lng: number;
}

export interface Betshop {
  id: number;
  name: string;
  address: string;
  city: string;
  city_id: number;
  county: string;
  location: Location;
}
