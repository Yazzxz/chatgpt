
const url = "https://www.infobae.com/america/mundo/2020/12/25/un-2020-inolvidable-el-anuario-de-infobae-con-las-noticias-que-mas-impactaron-en-el-mundo/";
const chat = require('./controllers/chatGPT')

axios.get(url)
	.then(response => {
		const html = response.data;
		const a = cheerio.load(html);
		const total = [];
		a("p").each((index, element) => {
			const text = a(element).text();
			total.push(text);
		});
		console.log(total.join(' '))
		chat.consulta(total.join(' '))
}); 