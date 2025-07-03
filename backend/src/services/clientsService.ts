import prisma from "../prismaClient";

export async function createClient(data: {
  name: string;
  cpf: string;
  email: string;
  favColor: string;
  notes?: string;
}) {
  return prisma.client.create({ data });
}
