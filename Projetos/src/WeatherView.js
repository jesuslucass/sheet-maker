class WeatherView {
	constructor(element) {
		this._element = element;
	}

	update(model) {
		this._element.innerHTML = this._template(model);
	}

	_template(model) {
		return model.weathers.map(
			(weather) => `
      <div class="city">
				<img src="./assets/img/${weather.weather.toLowerCase()}.jpg" alt="${
				weather.description
			}" class="weather-img" />
        <a href="javascript:controller.delete('${
					weather.city
				}');" class="btn-remove"><i class="fas fa-trash-alt"></i></a>
				<h1 class="city-name">${weather.city}</h1>
				<h2 class="temperature">${parseInt(weather.temperature)}º</h2>
				<p class="weather-description">${weather.description}</p>
			</div>
    `,
		);
	}
}
