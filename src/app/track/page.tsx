"use client";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { SwapOutlined } from "@ant-design/icons";

import React, { useEffect, useState } from "react";

import { Map, Marker } from "pigeon-maps";
import Image from "next/image";

import { Table, Button, Select, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";

import routes from "../../data/Routes.json";
import { useStore } from "../../store/store";

import { useRouter } from "next/navigation";

type Routetype = {
  route_id: string;
  source: string;
  destination: string;
  bus_number: string;
  departure_time: string;
  arrival_time: string;
  intermediate_places: string[];
  time: number[];
  intermediate_time: string[];
};

type columnRouteType = {
  route: string;
  bus: string;
  time: string;
};

const Page = () => {
  const { location, updateLocation } = useStore();
  const [Route, setRoute] = useState<Routetype[]>(routes);
  const router = useRouter();
  const [price, setPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (record: columnRouteType) => {
    let thatRoute = Route.find((route) => route.bus_number == record.bus);
    console.log(thatRoute);
    if (thatRoute) {
      setPrice(
        thatRoute.time[thatRoute.intermediate_places.indexOf(location.dest)] -
          thatRoute.time[thatRoute.intermediate_places.indexOf(location.src)]
      );
    } else {
      alert("there is some error");
    }
    setIsModalOpen(true);
  };

  const columns: ColumnsType<columnRouteType> = [
    {
      title: "Route",
      dataIndex: "route",
      key: "route",
      align: "center",
    },
    {
      title: "Bus",
      dataIndex: "bus",
      key: "bus",
      align: "center",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <div className="btngrp flex md:flex-row flex-col gap-3 items-center justify-center">
          <Button
            type="primary"
            className="bg-blue-600"
            size="middle"
            onClick={() => {
              router.push(`/track/${record.bus}`);
            }}
          >
            Track
          </Button>
          <Button
            type="primary"
            className="bg-blue-600"
            size="middle"
            onClick={() => {
              showModal(record);
            }}
          >
            Track Price
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    let filteredRoute = routes.filter((route) => {
      return (
        route.intermediate_places.includes(location.src) &&
        route.intermediate_places.includes(location.dest) &&
        route.intermediate_places.indexOf(location.src) <
          route.intermediate_places.indexOf(location.dest)
      );
    });
    setRoute(filteredRoute);
  }, []);

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

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        centered
        cancelButtonProps={{hidden:true}}
        okButtonProps={{ className: "bg-blue-400" }}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>The Distance is {price}, And The Price Will be {Math.floor(price*1.2)} Rupees.</p>
      </Modal>
      <div className="w-screen h-screen flex items-center justify-center">
        <Table
          bordered
          className="w-[80%] shadow-lg"
          columns={columns}
          dataSource={Route.map((route) => {
            return {
              route: route.source + " - " + route.destination,
              bus: route.bus_number,
              time:
                route.intermediate_time[
                  route.intermediate_places.indexOf(location.src)
                ] +
                " - " +
                route.intermediate_time[
                  route.intermediate_places.indexOf(location.dest)
                ],
            };
          })}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </main>
  );
};

export default Page;
