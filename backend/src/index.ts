import express, {Application, Request, RequestHandler, Response} from 'express';
import cors from 'cors';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

const app: Application = express();
const port: number = 8080;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (req: Request, res: Response): void => {
    res.send('Hello lfjsdflksdjfsdlkfjsdlk!');
});

app.post('/upload', upload.single('file'), async (req: Request, res: Response): Promise<void> => {
    try {
        res.send({
            message: 'Fichier téléchargé avec succès',
            filename: req.file?.filename,
        });
    } catch (err) {
        res.sendStatus(400);
    }
})

app.listen(port, "0.0.0.0", (): void => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
