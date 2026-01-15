export const InteractionMovie = (movie, storageKey, label) => {
  const stored = JSON.parse(localStorage.getItem(storageKey)) || [];
  const exists = stored.some((item) => item.id === movie.id);

  const updated = exists
    ? stored.filter((item) => item.id !== movie.id)
    : [...stored, movie];

  localStorage.setItem(storageKey, JSON.stringify(updated));

  alert(
    exists
      ? `Removido de ${label} com sucesso`
      : `Adicionado a ${label} com sucesso`
  );

  return !exists
};
