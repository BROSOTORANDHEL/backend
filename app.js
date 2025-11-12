import express from "express";
import 'dotenv/config.js';
import bookRoutes from "./routers/BookRoutes.js";
import studentRoutes from "./routers/StudentRoutes.js";
import UserRoutes from "./routers/UserRoutes.js";
import cors from "cors";

const app = express();

// middleware
app.use(express.json());
app.use(cors()); 

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/book', bookRoutes);
app.use('/student', studentRoutes);
app.use('/User', UserRoutes);

try {
    app.listen(process.env.PORT || 5000, () => {
        console.log('listening to port ${process.env.PORT || 5000}...');
    });
} catch (error) {
    console.log(error);
}