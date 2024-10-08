import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

import userRouter from "./routes/user.routes.js";

app.use("/api/v1/user", userRouter);

export { app };
