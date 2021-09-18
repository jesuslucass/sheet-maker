class WeatherList {
	constructor() {
		const storage = localStorage.getItem('@fica-frio-ai:weathers');
		if (!storage) {
			this.weathers = [];
			return;
		}
		const storageParsed = JSON.parse(storage);
		this._weathers = storageParsed.weathers.map(
			(weather) =>
				new Weather(
					weather._city,
					weather._weather,
					weather._description,
					weather._temperature,
				),
		);
	}

	add(weather) {
		this._weathers.push(weather);
		localStorage.setItem(
			'@fica-frio-ai:weathers',
			JSON.stringify({ weathers: this._weathers }),
		);
	}

	get weathers() {
		return [].concat(this._weathers);
	}

	delete(city) {
		this._weathers = this._weathers.filter((weather) => weather.city !== city);
		localStorage.setItem(
			'@fica-frio-ai:weathers',
			JSON.stringify({ weathers: this._weathers }),
		);
	}
}
