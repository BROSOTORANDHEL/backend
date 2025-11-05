import express from 'express';
import 'dotenv/config.js';
import bookRoutes from './routers/BookRoutes.js';
import studentRoutes from './routers/StudentRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/student', studentRoutes);
app.use('/book', bookRoutes);

try {
  app.listen(port, () => {
    console.log(`Listening to port ${port}...`);
  });
} catch (error) {
  console.error(error);
}
