import express, { Application } from "express";
import { MongoClient } from "mongodb";
import getNotes from "./handlers/get";
import createNote from "./handlers/create";
import deleteNote from "./handlers/delete";
import editNote from "./handlers/edit";
import cors from "cors";

const app: Application = express();
const port = 4000;

const mongoURI = "mongodb://localhost:27017";
const client = new MongoClient(mongoURI);

client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.locals.db = client.db("notes").collection("notes");

app.use(cors());

app.use(getNotes);
app.use(createNote);
app.use(deleteNote);
app.use(editNote);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
