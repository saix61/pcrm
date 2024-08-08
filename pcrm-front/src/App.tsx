import { useEffect, useState } from "react";
import "./App.css";

export type TUser = {
  name: string;
  surname: string;
  plan: {
    name: string;
    description: string;
  };
  plan_date_start: string;
  plan_date_end: string;
};

function formatISODate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleString("ru-RU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function App() {
  const [user, setUser] = useState<TUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("/api/users/me")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.user);

        setUser(data.user);
        setIsLoading(false);
      });
  }, []);

  const handleLogin = (username: string, password: string) => {
    setIsLoading(true);
    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
        setIsLoading(false);
      });
  };

  const handleLogout = () => {
    setIsLoading(true);
    fetch("/api/users/logout", {
      method: "POST",
    }).then(() => {
      setIsLoading(false);
      setUser(null);
    });
  };

  return (
    <div>
      {isLoading ? (
        <div>Загрузка...</div>
      ) : user ? (
        <div>
          <table>
            <tr>
              <th colSpan={2}>
                <h1>Информация об аккаунте</h1>
              </th>
            </tr>
            <tr>
              <td>
                <b>Имя:</b>
              </td>
              <td>{`${user.name} ${user.surname}`}</td>
            </tr>
            <tr>
              <td>
                <b>План:</b>
              </td>
              <td>{user.plan.name}</td>
            </tr>
            {user.plan.name !== "Деактивирован" && user.plan_date_start && (
              <tr>
                <td>
                  <b>Дата активации:</b>
                </td>
                <td>{formatISODate(user.plan_date_start)}</td>
              </tr>
            )}
            {user.plan.name !== "Деактивирован" && user.plan_date_end && (
              <tr>
                <td>
                  <b>Действует до:</b>
                </td>
                <td>{formatISODate(user.plan_date_end)}</td>
              </tr>
            )}
            {user.plan.description && (
              <>
                <tr>
                  <td colSpan={2}>
                    <h3>Описание плана:</h3>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>{user.plan.description}</td>
                </tr>
              </>
            )}
          </table>
          <br />
          <button onClick={handleLogout}>Выйти</button>
        </div>
      ) : (
        <div>
          <h2>Авторизуйтесь</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin(username, password);
            }}
          >
            <div>
              <input
                type="text"
                name="login"
                placeholder="Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Войти</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
