interface CloudDetails {
  all: number;
}

interface WindDetails {
  deg: number;
  gust: number;
  speed: number;
}

interface MainDetails {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

interface WeatherDescription {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface RainDetails {
  "3h": number;
}

interface SnowDetails {
  "3h": number;
}

interface SysDetails {
  pod: string;
}

export interface WeatherData {
  clouds?: CloudDetails;
  dt: number;
  dt_txt: string;
  main: MainDetails;
  pop: number;
  rain?: RainDetails;
  snow?: SnowDetails;
  sys: SysDetails;
  visibility: number;
  weather: WeatherDescription[];
  wind: WindDetails;
}

export interface WeatherDataItem {
  dt_txt: string;
  weather: WeatherDescription[];
  main: MainDetails;
  clouds?: CloudDetails;
}
