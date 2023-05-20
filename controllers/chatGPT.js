const openai = require("../models/openai");
const cheerio = require("cheerio");
const axios = require("axios");

exports.consulta = (req,res, direccion) => {
	axios.get(direccion)
		.then(response => {
			const html = response.data;
			const a = cheerio.load(html);
			const total = [];
			a("p").each((index, element) => {
				const text = a(element).text();
				total.push(text);
			});
			openai
		.createCompletion({
			model: "text-davinci-003",
			// Agregamos a la conversación el mesansaje en cuestión
			prompt: "comprueba si estos sucesos realmente pasaron o si son fakenew y puntua del 1 al 10 y por que: " + total,
			temperature: 0.5,
			max_tokens: 2048,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0.6,
			stop: [" Human:", " AI:"],
		})
		.then((response) => {
			// Sending the response data back to the client
			console.log(response.data.choices[0].text);
		});
		});

}
