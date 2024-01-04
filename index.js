const express = require('express');
const chatbotRoutes = require('./routes/chatbotRoutes');

const app = express();
app.use(express.json());
app.use('/api', chatbotRoutes);

const port =3000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});