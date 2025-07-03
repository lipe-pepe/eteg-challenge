"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatCpf } from "@/utils/formatCpf";
import { createClient } from "@/services/clients/createClient";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";
import { ColorSelect } from "./ColorSelect";
import { ClientFormData, clientSchema } from "@/schemas/clientSchema";

export const Form = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      favColor: "",
    },
  });

  const onSubmit: SubmitHandler<ClientFormData> = async (
    data: ClientFormData
  ) => {
    try {
      await createClient(data);
      setModalType("success");
      setModalMessage("Cliente cadastrado com sucesso!");
      reset({ name: "", favColor: "", email: "", notes: "", cpf: "" });
    } catch (err: unknown) {
      let message = "Erro inesperado";

      if (err instanceof Error) {
        message = err.message;
      }

      setModalType("error");
      setModalMessage(message);
    } finally {
      setModalOpen(true);
    }
  };

  return (
    <div className="border-[#ccc] border-1 px-8 py-6 rounded-lg shadow-black/10 shadow-md w-auto min-w-auto max-w-auto sm:w-64 sm:min-w-[16rem] sm:max-w-[16rem] md:w-96 md:min-w-[24rem] md:max-w-[24rem] mx-auto">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <h3>Nome completo *</h3>
          <input {...register("name")} />
          {errors.name && (
            <span className="input-error">{errors.name.message}</span>
          )}
          <h3>CPF *</h3>
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
          <h3>E-mail *</h3>
          <input {...register("email")} />
          {errors.email && (
            <span className="input-error">{errors.email.message}</span>
          )}
          <h3>Cor preferida *</h3>
          <ColorSelect control={control} name="favColor" />
          {errors.favColor && (
            <span className="input-error">{errors.favColor.message}</span>
          )}
          <h3>Observações</h3>
          <input {...register("notes")} />
          {errors.notes && (
            <span className="input-error">{errors.notes.message}</span>
          )}
        </div>
        <div className="flex justify-center">
          <Button type="submit">Enviar</Button>
        </div>
      </form>
      {modalOpen && (
        <Modal
          type={modalType}
          message={modalMessage}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};
