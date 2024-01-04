const axios = require('axios');
require ('dotenv').config()

const apiKey = process.env.OPEN_AI_KEY
const apiUrl = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions';

class Chatbot {
    constructor() {
        this.conversationHistory = [];
    }

    async getResponse(userInput) {
        this.conversationHistory.push(`User: ${userInput}`);

        try {
            const response = await axios.post(apiUrl, {
                prompt: this.conversationHistory.join('\n'),
                max_tokens: 150,
                stop: ['User:', 'AI:']
            }, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });

            const aiText = response.data.choices[0].text.trim();
            this.conversationHistory.push(`AI: ${aiText}`);

            return aiText;
        } catch (error) {
            console.error('Error in getting response:', error);
            return null;
        }
    }
}

module.exports = Chatbot;
