"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  cpf: z.string(),
  email: z.string(),
  favColor: z.string(),
  notes: z.string(),
});

type FormInputs = z.infer<typeof formSchema>;

export const Form = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) =>
    console.log(data);

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Nome completo</h3>
        <input {...register("name")} />
        <h3>CPF</h3>
        <input {...register("cpf")} />
        <h3>E-mail</h3>
        <input {...register("email")} />
        <h3>Cor preferida</h3>
        <input {...register("favColor")} />
        <h3>Observações</h3>
        <input {...register("notes")} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
