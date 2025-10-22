import express from 'express';

// Initialize app
const app = express();

const port = 3000; 

//middleware
app.use(express.json());

try {
app.listen(port, () => {
    console.log ('listening to port 3000...');
});

}catch (error) {
    console.log(e);
}

app.get('/', async (request, response) => {
    response.status(200).json({message: "Cresmarie"})
});
