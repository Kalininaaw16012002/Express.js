require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 3005;

connectDB().then(() => {
  app.listen(PORT, '127.0.0.1', () => {
    console.log(` http://127.0.0.1:${PORT}`);
  });
});