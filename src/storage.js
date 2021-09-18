class Charsheet {
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
}