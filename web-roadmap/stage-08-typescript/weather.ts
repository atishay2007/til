export interface WeatherSnapshot {
  city: string;
  temperatureC: number;
  windKmh: number;
}

export type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

export function formatWeather(result: Result<WeatherSnapshot>): string {
  if (!result.ok) {
    return `Weather unavailable: ${result.error}`;
  }
  const { city, temperatureC, windKmh } = result.data;
  return `${city}: ${temperatureC}C, wind ${windKmh} km/h`;
}
