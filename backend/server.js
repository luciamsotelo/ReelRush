const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models'); // Import Sequelize instance
const feedbackRoutes = require('./routes/feedbackRoutes'); // Import feedbackRoutes


const app = express();


// Middleware to parse JSON bodies

app.use(bodyParser.json());


// Routes for authentication and data
app.use('/api', feedbackRoutes);


// Set the port for the server to listen on

const PORT = process.env.PORT || 3001;


// Authenticate with the database and start the server

sequelize.authenticate()

  .then(() => {

    console.log('Connection to the database has been established successfully.');

    app.listen(PORT, () => {

      console.log(`Server is running on port ${PORT}`);

    });

  })

  .catch(err => {

    console.error('Unable to connect to the database:', err);

  });