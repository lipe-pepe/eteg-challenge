import * as z from "zod";

export const clientSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nome é obrigatório" })
    .includes(" ", { message: "Digite nome e sobrenome separados por espaço" }),
  cpf: z
    .string()
    .min(1, { message: "CPF é obrigatório" })
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido" }),
  email: z
    .string()
    .min(1, { message: "E-mail é obrigatório" })
    .email({ message: "Formato do email inválido" }),
  favColor: z.string().min(1, "Cor preferida é obrigatória"),
  notes: z.string().optional(),
});

export type ClientFormData = z.infer<typeof clientSchema>;
