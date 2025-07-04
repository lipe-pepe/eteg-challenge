import express from "express";
import cors from "cors";
import clientsRoutes from "./routes/clientsRoutes";

const port = 4000;

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use(express.json());

app.use("/clients", clientsRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
