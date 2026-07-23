import express from "express";
import lmsRouter from "./routes/lmstudio.routes.ts";
const app = express();
const port = process.env.PORT || "8080";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the LMStudio API");
});

app.use("/lmstudio", lmsRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
