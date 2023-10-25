import { Router, Request, Response } from "express";

const r = Router();

r.get("/notes", async (req: Request, res: Response) => {
  try {
    const db = req.app.locals.db;
    const docs = await db.find({}).toArray();
    res.status(200).json(docs);
  } catch (err) {
    console.error("Error retrieving notes:", err);
    res.status(500).send("Internal Server Error");
  }
});

export default r;
