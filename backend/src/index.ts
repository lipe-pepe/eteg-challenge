import express from "express";
import cors from "cors";
import clientsRoutes from "./routes/clients";

const port = 3001;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // COLOCAR CORRETAMENTE COM VAR DE AMBIENTE
  })
);

app.use(express.json());

app.use("/clients", clientsRoutes);

app.listen(3001, () => {
  console.log(`Listening on port ${port}`);
});
