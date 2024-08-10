import { getLogout } from "@api/getLogout";
import useAppState from "@store/useAppState";
import useUserState from "@store/useUserState";

const LogoutButton = () => {
  const { setUser } = useUserState();
  const { setIsLoading } = useAppState();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await getLogout();
      setUser(null);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return <button onClick={handleLogout}>Выйти</button>;
};

export default LogoutButton;
