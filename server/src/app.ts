// Import required modules and dependencies
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';


const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => {
    res.send('Yukimito Server!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
