import { create } from "zustand";

type TAppState = {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
};

const useAppState = create<TAppState>((set) => ({
  isLoading: true,
  setIsLoading: (state) => set({ isLoading: state }),
}));

export default useAppState;
