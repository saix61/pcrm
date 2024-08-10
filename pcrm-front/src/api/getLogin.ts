export const getLogin = async (username: string, password: string) => {
  const response = await fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  });
  if (!response.ok) {
    throw new Error("Ошибка при авторизации");
  }
  const data = await response.json();
  return data.user;
};
