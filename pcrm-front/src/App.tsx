import { useEffect } from "react";
import useAppState from "@store/useAppState";
import useUserState from "@store/useUserState";
import { getMe } from "@api/getMe";
import Loader from "@components/Loader/Loader";
import AuthPage from "./pages/AuthPage/AuthPage";
import PersonalPage from "./pages/PersonalPage/PersonalPage";

function App() {
  const { user, setUser } = useUserState();
  const { isLoading, setIsLoading } = useAppState();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const userData = await getMe();
        setUser(userData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMe();
  }, [setUser, setIsLoading]);

  return (
    <div className="App">
      {isLoading ? <Loader /> : user ? <PersonalPage /> : <AuthPage />}
    </div>
  );
}

export default App;
