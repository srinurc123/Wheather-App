async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "d04d2429a23b0cf18c66158377aee8b2"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response =await fetch(url);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
  
      const result = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temp: ${data.main.temp} °C</p>
        <p>☁️ Weather: ${data.weather[0].main} (${data.weather[0].description})</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    } catch (error) {
      document.getElementById("weatherResult").innerHTML = `<p style="color:#ffb3b3;">${error.message}</p>`;
    }
  }
  