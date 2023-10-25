import express, { Router, Request, Response } from "express";

const r = Router();

r.post("/notes", express.json(), async (req: Request, res: Response) => {
  try {
    const db = req.app.locals.db;
    const newNote = req.body;

    const result = await db.insertOne(newNote);
    res.status(200).json({
      message: "Note created successfully",
      insertedId: result.insertedId,
    });
  } catch (err) {
    console.error("Error creating note:", err);
    res.status(500).send("Internal Server Error");
  }
});

export default r;
