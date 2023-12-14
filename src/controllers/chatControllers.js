const OpenAI = require('openai');

// v1
const client = new OpenAI({
    apiKey: process.env.SECRET_KEY
});

exports.healthCheck = (req, res) => {
    res.json({
        status: 'ok'
    });
};

exports.handleChat = async (req, res) => {
    try {
        const messages = req.body.messages

        const chat = await client.chat.completions.create({
            messages: messages,
            model: "gpt-3.5-turbo-1106"
        });

        res.status(200).json(chat.choices[0])
    } catch (error) {
        console.log(error)

        res.status(500).json({ error: "There is a problem in the server" })
    }
}