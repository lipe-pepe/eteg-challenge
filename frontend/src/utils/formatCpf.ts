export function formatCpf(value: string) {
  return value
    .slice(0, 14) // Limita a 14 caracteres (com pontos e hífen)
    .replace(/\D/g, "") // Remove não dígitos
    .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona o terceiro "."
    .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona o segundo "."
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona o "-"
}
