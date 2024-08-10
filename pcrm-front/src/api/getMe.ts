export const getMe = async () => {
  const response = await fetch("/api/users/me");
  if (!response.ok) {
    throw new Error("Ошибка при получении данных пользователя");
  }
  const data = await response.json();
  return data.user;
};
