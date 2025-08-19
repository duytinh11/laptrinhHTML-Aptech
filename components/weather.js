 async function WeatherComponent() {
      const details = document.getElementsByClassName("weather-component");

      for (let i = 0; i < details.length; i++) {
        const city = details[i].getAttribute("city");
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric&lang=vi`;

        try {
          const rs = await fetch(url);
          const data = await rs.json();

          // icon của thời tiết
          const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

          const html = `
            <div class="card text-center shadow-sm">
              <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <img src="${icon}" alt="weather icon">
                <p class="card-text">${data.weather[0].description}</p>
                <h6 class="card-subtitle mb-2 text-muted">${data.main.temp}°C</h6>
                <p>Độ ẩm: ${data.main.humidity}%</p>
                <p>Gió: ${data.wind.speed} m/s</p>
              </div>
            </div>
          `;

          details[i].innerHTML = html;
        } catch (error) {
          details[i].innerHTML = `<div class="alert alert-danger">Lỗi tải dữ liệu</div>`;
        }
      }
    }

    WeatherComponent();