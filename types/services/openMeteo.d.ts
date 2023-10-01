declare namespace OpenMeteoNamespace {
  export interface ICurrentWeather {
    current_weather: IWeather;
  }
  export interface IWeather {
    weathercode: number;
    temperature: number;
    is_day: 1 | 0;
  }
}
