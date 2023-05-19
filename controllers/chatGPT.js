const openai = require('../models/openai')

exports.consulta = (req, res, message) => {
    openai
        .createCompletion({
            model: 'text-davinci-003',
            // Agregamos a la conversación el mesansaje en cuestión
            prompt: message,
            temperature: 0.9,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
            stop: [' Human:', ' AI:'],
        })
        .then((response) => {
            // Sending the response data back to the client
            res.send(response.data.choices[0].text);
        });
};