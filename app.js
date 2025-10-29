import express from 'express';
import 'dotenv/config.js';
import bookRoutes from './routers/BookRoutes.js';
import studentRoutes from './routers/StudentRoutes.js';

// Initialize app
const app = express();

const port = 3000; 

//middleware
app.use(express.json());

try {
app.listen(process.env.PORT || 5000, () => {
    console.log ('listening to port $ {process.env.PORT || 3000}...')
});

}catch (error) {
    console.log(e);
}

app.use('/student', studentRoutes);

app.use('/book', bookRoutes);

