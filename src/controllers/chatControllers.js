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
        console.log(req.session.id)

        // let messages = req.session.messages
        //
        // if (!messages) {
        //     messages = [{ "role": "system", "content": "You are a helpful assistant." }]
        // }
        //
        // messages.push(req.body.messages)
        //
        // const chat = await client.chat.completions.create({
        //     messages: messages,
        //     model: "gpt-3.5-turbo-1106"
        // });
        //
        // messages.push(chat.choices[0].message)
        //
        // res.status(200).json(chat.choices[0])
    } catch (error) {
        console.log(error)

        res.status(500).json({ error: "There is a problem in the server" })
    }
}