document.getElementById('weatherForm').addEventListener('submit', async function(e) {
         e.preventDefault();
         const city = document.getElementById('cityInput').value;
         const apiKey = 'bcf0da2b8cd2beca4dba59ce113ee74f';
         document.getElementById('weatherData').innerHTML = 'Loading...';
         
         try {
           const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
           const data = await response.json();
           
           if (response.ok) {
              const html = `
               <h2>${data.name}, ${data.sys.country}</h2>
               <p>Temperature: ${data.main.temp}°C</p>
               <p>Description: ${data.weather[0].description}</p>
               <p>Humidity: ${data.main.humidity}%</p>
               <p>Pressure: ${data.main.pressure}hPa</p>
               <p>Wind Speed: ${data.wind.speed}m/s</p>
             `;
             document.getElementById('weatherData').innerHTML = html;
           } else {
             document.getElementById('weatherData').innerHTML = 'Error: Unable to fetch weather data';
           }
         } catch (err) {
           document.getElementById('weatherData').innerHTML = 'Error: Please enter a valid location';
         }
       });



     