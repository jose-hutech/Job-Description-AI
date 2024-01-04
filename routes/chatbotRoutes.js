const express = require('express');
const Chatbot = require('../chatbot');
const router = express.Router();

const chatbot = new Chatbot();

router.post('/chat', async (req, res) => {
    const userInput = req.body.userInput;
    const response = await chatbot.getResponse(userInput);
    res.json({ response });
});

router.get('/history', (req, res) => {
    res.json({ history: chatbot.conversationHistory });
});

module.exports = router;
