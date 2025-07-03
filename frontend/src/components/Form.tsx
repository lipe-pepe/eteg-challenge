"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { formatCpf } from "@/utils/formatCpf";
import { createClient } from "@/services/clients/createClient";

const formSchema = z.object({
  name: z.string().includes(" ", { message: "Digite o nome completo" }), // O nome completo precisa ter espaço para separar nome e sobrenome
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: "CPF inválido",
  }),
  email: z.string().email({ message: "Formato do email inválido" }),
  favColor: z.string(),
  notes: z.string(),
});

type FormInputs = z.infer<typeof formSchema>;

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data: FormInputs) => {
    console.log(data);
    try {
      const result = await createClient(data);
      // TRATAR O SUCESSO CORRETAMENTE!!!
      console.log("Cliente cadastrado com sucesso:", result);
      alert("Cadastro realizado com sucesso!");
    } catch (err) {
      console.error(err);
      // TRATAR A MENSAGEM DE ERRO CORRETAMENTE!
      alert("Error");
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Nome completo</h3>
        <input {...register("name")} />
        {errors.name && (
          <span className="input-error">{errors.name.message}</span>
        )}
        <h3>CPF</h3>
        <input
          {...register("cpf", {
            onChange: (e) => {
              e.target.value = formatCpf(e.target.value);
            },
          })}
        />
        {errors.cpf && (
          <span className="input-error">{errors.cpf.message}</span>
        )}
        <h3>E-mail</h3>
        <input {...register("email")} />
        {errors.email && (
          <span className="input-error">{errors.email.message}</span>
        )}
        <h3>Cor preferida</h3>
        <input {...register("favColor")} />
        {errors.favColor && (
          <span className="input-error">{errors.favColor.message}</span>
        )}
        <h3>Observações</h3>
        <input {...register("notes")} />
        {errors.notes && (
          <span className="input-error">{errors.notes.message}</span>
        )}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
