import { create } from "zustand";

export const useToggleRoomStore = create((set) => ({
    isHomeOffice2: true,
    isTransitioning: false,
    isBeforeZooming: false,

    setHomeOffice2: (booleanValue) => set({
        isHomeOffice2: booleanValue,
    }),
    setIsTransitioning: (booleanValue) => set({
        isTransitioning: booleanValue,
    }),

    setIsBeforeZooming: (booleanValue) => set({
      isBeforeZooming: booleanValue,
    }),
}));