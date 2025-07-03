import { Router, Request, Response } from "express";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  const { name, cpf, email, favColor, notes } = req.body;

  console.log("Received data:", req.body);

  res.json({ message: "Cliente cadastrado com sucesso!" });
});

export default router;
