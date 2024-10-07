import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chatMessage", (msg) => {
    io.emit("chatMessage", msg);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error occurred:", error);
      throw error;
    });

    server.listen(PORT, () => {
      console.log(`Server is running at PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed! ", err);
  });
