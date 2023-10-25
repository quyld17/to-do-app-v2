import { Router, Request, Response } from "express";
import { ObjectId } from "mongodb";

const r = Router();

r.delete("/notes/:id", async (req: Request, res: Response) => {
  try {
    const db = req.app.locals.db;
    const id = req.params.id as string;
    if (!id) {
      res.status(400).json({ message: "Missing ID parameter" });
      return;
    }

    const result = await db.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Note deleted successfully" });
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (err) {
    console.error("Error deleting note:", err);
    res.status(500).send("Internal Server Error");
  }
});

export default r;
