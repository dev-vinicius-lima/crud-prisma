// formatar data padrão brasil
export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(date)
}
