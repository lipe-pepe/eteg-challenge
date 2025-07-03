export interface ClientData {
  name: string;
  cpf: string;
  email: string;
  favColor: string;
  notes: string;
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

  if (!response.ok) {
    throw new Error("Error creating client");
  }

  return response.json();
}
