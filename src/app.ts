import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log(`App is running on post ${port}`);
});
