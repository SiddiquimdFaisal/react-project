import { useEffect,useState} from "react";

import Button from "../Components/Button";

function Weather() {

  const [city, setCity] =
    useState("Mumbai");

  const [weather, setWeather] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function fetchWeather() {

    setLoading(true);
    setError("");

    try {

      const geoResponse =
        await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            city
          )}&count=1&language=en&format=json`
        );

      const geoData =
        await geoResponse.json();

      if (!geoData.results?.length) {
        throw new Error(
          "City not found"
        );
      }

      const location =
        geoData.results[0];

      const weatherResponse =
        await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`
        );

      const data =
        await weatherResponse.json();

      setWeather({
        city: location.name,
        country: location.country,
        ...data.current
      });

    } catch (error) {

      setWeather(null);
      setError(error.message);

    } finally {

      setLoading(false);

    }
  }

  useEffect(() => {
    // fetchWeather();
  }, [ ]);

  return (
    <section>

      <div className="page-heading">

        <span className="badge">
          API + useEffect
        </span>

        <h1>
          Weather API
        </h1>

        <p>
          Enter a city to fetch live weather data.
        </p>

      </div>

      <div className="weather-search">

        <input
          value={city}
          onChange={(event) =>
            setCity(event.target.value)
          }
          placeholder="Enter city"
        />

        <Button
          onClick={fetchWeather}
        >
          Get Weather
        </Button>

      </div>

      {loading && (
        <div className="card">
          Loading weather...
        </div>
      )}

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      {weather && !loading && (

        <div className="card weather-card">

          <h2>
            {weather.city},{" "}
            {weather.country}
          </h2>

          <div className="temperature">
            {Math.round(
              weather.temperature_2m
            )}
            °C
          </div>

          <p>
            Humidity:{" "}
            {weather.relative_humidity_2m}%
          </p>

          <p>
            Wind:{" "}
            {weather.wind_speed_10m} km/h
          </p>

          <p>
            Updated: {weather.time}
          </p>

        </div>
      )}

    </section>
  );
}

export default Weather;