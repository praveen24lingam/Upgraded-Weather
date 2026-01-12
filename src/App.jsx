import { useEffect, useState } from "react";

const API_KEY = "b9084698cb245a29a15a98229cd9e8fb";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (url) => {
    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const res = await fetch(url);
      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    fetchWeather(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    localStorage.setItem("lastCity", city);
  };

  const handleLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        fetchWeather(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
      },
      () => setError("Location access denied"),
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
      setCity(lastCity);
      fetchWeather(
        `https://api.openweathermap.org/data/2.5/weather?q=${lastCity}&appid=${API_KEY}&units=metric`
      );
    }
  }, []);

  return (
    <div className="app">
      <h1>Anime Weather</h1>

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <div className="buttons">
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleLocation}>My Location</button>
      </div>

      <div className="note">
        ⚠ Location may be approximate on desktop devices
      </div>

      {loading && <div id="loader">Loading...</div>}
      {error && <div id="error">{error}</div>}

      {weather && !loading && (
        <div id="weatherCard">
          <img
            id="weatherIcon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather"
          />
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <div id="temperature">{Math.round(weather.main.temp)}°C</div>
          <div id="description">{weather.weather[0].description}</div>
          <div id="details">
            Humidity: {weather.main.humidity}% | Wind:{" "}
            {weather.wind.speed} m/s
          </div>
        </div>
      )}
    </div>
  );
}
