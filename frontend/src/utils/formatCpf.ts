export function formatCpf(value: string) {
  return value
    .slice(0, 14) // limita a 14 caracteres (com pontos e hífen)
    .replace(/\D/g, "") // remove não dígitos
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}
