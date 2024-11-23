import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = 8080;

app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
    res.send('Hello woorld!');
});

app.listen(port, "0.0.0.0", (): void => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
