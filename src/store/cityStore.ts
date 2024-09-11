import { create } from 'zustand';

interface CityStore {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

const useCityStore = create<CityStore>((set) => ({
  selectedCity: '',
  setSelectedCity: (city: string) => set({ selectedCity: city }),
}));

export default useCityStore;