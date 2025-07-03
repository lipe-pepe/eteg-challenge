import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import prisma from "../prismaClient";

export async function createClient(data: {
  name: string;
  cpf: string;
  email: string;
  favColor: string;
  notes?: string;
}) {
  try {
    return await prisma.client.create({ data });
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      const target = (error.meta as { target: string[] }).target;
      if (target.includes("cpf")) {
        throw new Error("CPF já cadastrado no sistema.");
      }
    }
    throw error;
  }
}
