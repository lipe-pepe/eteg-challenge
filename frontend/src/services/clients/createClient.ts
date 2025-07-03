const API_URL = process.env.NEXT_PUBLIC_API_URL;
export interface ClientData {
  name: string;
  cpf: string;
  email: string;
  favColor: string;
  notes?: string;
}

export async function createClient(data: ClientData) {
  const response = await fetch(`${API_URL}/clients`, {
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
