import { memo, useState } from "react";
import "./AuthPage.css";
import useAppState from "@store/useAppState";
import useUserState from "@store/useUserState";
import { getLogin } from "@api/getLogin";
import { Logo } from "@components/Logo/Logo";

const AuthPage = () => {
  const { setUser } = useUserState();
  const { setIsLoading } = useAppState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (username: string, password: string) => {
    setIsLoading(true);

    try {
      const userData = await getLogin(username, password);
      setUser(userData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="AuthPage">
      <div className="AuthPage-Logo">
        <Logo />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(username, password);
        }}
      >
        <div className="AuthPage-InputLabel">
          <input
            type="text"
            name="login"
            placeholder="Имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="AuthPage-InputLabel">
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="AuthPage-Button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default memo(AuthPage);
