const API_KEY = 'fc863b4348efb5c585b9636fdb100f78';

const getWeather = async (pCity) => {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${pCity}&appid=${API_KEY}&lang=pt_br&units=metric`,
		);

		const data = await response.json();
		const {
			name: city,
			weather,
			main: { temp: temperature },
		} = data;

		return {
			city,
			weather: weather[0].main,
			description: weather[0].description,
			temperature,
		};
	} catch (error) {
		console.log(error);
	}
};

// TODO: [X] Criar CSS
// TODO: [X] Adicionar cidade digitada em uma lista
// TODO: [X] Quando atualizar a lista, gerar todos os cards de tempo novamente.
// TODO: [] Armazenar a lista no localStorage
// TODO: [] Criar função de remover a cidade
