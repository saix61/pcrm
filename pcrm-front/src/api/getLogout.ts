export const getLogout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Ошибка при выходе");
  }
  return true;
};
