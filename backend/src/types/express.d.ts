// types/express.d.ts

declare namespace Express {
    export interface Request {
        file?: Express.Multer.File;
    }
}
