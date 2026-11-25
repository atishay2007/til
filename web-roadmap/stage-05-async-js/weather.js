async function fetchCityWeather(latitude, longitude) {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}` +
    `&longitude=${longitude}&current_weather=true`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const data = await res.json();
    return data.current_weather;
  } catch (err) {
    console.error("Failed to load weather:", err.message);
    return null;
  }
}

async function fetchMultipleCities(coordsList) {
  const tasks = coordsList.map(({ lat, lon }) => fetchCityWeather(lat, lon));
  return Promise.all(tasks);
}

if (typeof module !== "undefined") {
  module.exports = { fetchCityWeather, fetchMultipleCities };
}
