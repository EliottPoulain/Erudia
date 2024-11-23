import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();
const port: number = 8080;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (req: Request, res: Response): void => {
    res.send('Hello lfjsdflksdjfsdlkfjsdlk!');
});

app.listen(port, "0.0.0.0", (): void => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
