// src/app.ts
import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port = 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

app.get('/wassupbro', (req: Request, res: Response) => {
    res.send('Wassup dawg!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
