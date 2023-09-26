"use client";

import { useEffect, useState } from "react";
import { Map, Marker } from "pigeon-maps";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { useStore } from "@/store/store";

const Bus = ({ params }: any) => {
  const {center,connectToServer} = useStore()

  useEffect(()=>{connectToServer(params.bus)},[params.bus,connectToServer])

  return (
    <main className="w-screen flex items-center flex-col relative overflow-hidden">
      <div className="p-3 rounded-full absolute top-3 left-3 shadow-lg flex items-center justify-center z-50 bg-white">
        <ArrowLeftOutlined
          style={{ fontSize: "130%" }}
          onClick={() => {
            window.history.back();
          }}
        />
      </div>
      <div className="w-screen h-screen relative">
        <Map center={center} minZoom={5} animate >
          <Marker anchor={center} color="blue" />
        </Map>
      </div>
    </main>
  );
};

export default Bus;
