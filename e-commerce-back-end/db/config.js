const mongoose = require('mongoose');

// Fetch DB_URL from environment variables
const dbURI = process.env.DB_URL;
if (!dbURI) {
  throw new Error('DB_URL environment variable is not defined');
}

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

