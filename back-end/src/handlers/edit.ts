import express, { Router, Request, Response } from "express";
import { ObjectId } from "mongodb";

const r = Router();

r.put("/notes", express.json(), async (req: Request, res: Response) => {
  try {
    const db = req.app.locals.db;
    const updateNote = req.body;

    const result = await db.updateOne(
      { _id: new ObjectId(updateNote._id) },
      { $set: { note: updateNote.note } }
    );

    if (result.modifiedCount === 1) {
      res.status(200).json({ message: "Note updated successfully" });
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (err) {
    console.error("Error updating note:", err);
    res.status(500).send("Internal Server Error");
  }
});

export default r;
