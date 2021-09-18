class Weather {
	constructor(city, weather, description, temperature) {
		this._city = city;
		this._weather = weather;
		this._description = description;
		this._temperature = temperature;
		Object.freeze();
	}

	get city() {
		return this._city;
	}

	get weather() {
		return this._weather;
	}

	get description() {
		return this._description;
	}

	get temperature() {
		return this._temperature;
	}
}
