require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: process.env.TOKEN,
});
const openai = new OpenAIApi(configuration);

module.exports = openai