export interface ClientData {
  name: string;
  cpf: string;
  email: string;
  favColor: string;
  notes?: string;
}

export async function createClient(data: ClientData) {
  // ADICIONAR VARIAVEL DE AMBIENTE
  const response = await fetch("http://localhost:3001/clients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body.error || "Erro ao criar cliente");
  }

  return body;
}
