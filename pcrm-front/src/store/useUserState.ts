import { create } from "zustand";
import { User } from "payload/generated-types";

type Nullable<T> = T | null;

type TUserState = {
  user: Nullable<User>;
  setUser: (userData: Nullable<User>) => void;
  clearUser: () => void;
};

const useUserState = create<TUserState>((set) => ({
  user: null,
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: null }),
}));

export default useUserState;
