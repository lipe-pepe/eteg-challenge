import { Request, Response } from "express";
import { createClient } from "../services/clientsService";

export async function postClient(req: Request, res: Response) {
  try {
    const newClient = await createClient(req.body);

    res
      .status(201)
      .json({ message: "Cliente cadastrado com sucesso!", newClient });
  } catch (error: any) {
    console.error(error);

    res
      .status(400)
      .json({ error: error.message || "Erro ao cadastrar cliente" });
  }
}
