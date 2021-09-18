class WeatherController {
	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputCity = $('#city');
		this._weathersList = new WeatherList();
		this._weatherView = new WeatherView($('#cities'));
		this._weatherView.update(this._weathersList);
	}

	async add(event) {
		event.preventDefault();

		const cityTyped = event.target.city.value;
		const data = await getWeather(cityTyped);

		if (!data) {
			return;
		}

		const { city, weather, description, temperature } = data;

		this._weathersList.add(
			new Weather(city, weather, description, temperature),
		);
		this._weatherView.update(this._weathersList);
		this._inputCity.value = '';
	}

	delete(city) {
		this._weathersList.delete(city);
		this._weatherView.update(this._weathersList);
	}
}
