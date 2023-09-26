import { create } from "zustand";

import io from "socket.io-client";

interface LoactionType {
  location: { src: string; dest: string; date: string };
  updateLocation: (data: { src: string; dest: string; date: string }) => void;
  geoLocation: { lat: number; long: number };
  updateGeoLocation: (data: { lat: number; long: number }) => void;
  center: [number, number];
  connectToServer: (data: string) => void;
}

export const useStore = create<LoactionType>()((set) => ({
  location: { src: "", dest: "", date: "" },
  updateLocation: (data) => set(() => ({ location: data })),
  geoLocation: { lat: 31.1048, long: 77.1734 },
  updateGeoLocation: (data) => set(() => ({ geoLocation: data })),
  center: [31.1048, 77.1734],
  connectToServer: (data: string) => {
    const socket = io(`http://localhost:3456/traveller?busnumber=${data}`);
    socket.on("connect", () => {
      console.log("Traveller Connected");
      socket.on("update", (data) => {
        set(() => ({ center: [data.lat, data.long] }));
      });
      socket.on("message", (data) => {
        alert(data);
      });
      socket.on("server-error", (data) => {
        alert(data);
        window.history.back();
      });
    });
  },
}));
