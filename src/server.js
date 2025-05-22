require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

(async () => {
  await connectDB();

  const server = app.listen(PORT, () =>
    console.log(`🚀  Server running on port ${PORT}`),
  );

  process.on('unhandledRejection', (err) => {
    console.error('UnhandledRejection:', err);
    server.close(() => process.exit(1));
  });
})();
