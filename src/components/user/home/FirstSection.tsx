import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/user/Navbar";
import Image from "next/image";

import { Button, Select, Table } from "antd";

import { SwapOutlined } from "@ant-design/icons";

import { useStore } from "../../../store/store";

const allLocations = [
  "Shimla",
  "Manali",
  "Dharamshala",
  "Dalhousie",
  "Solan",
  "Bilaspur",
  "Mandi",
  "Kullu",
  "Kangra",
  "Pathankot",
  "Kasol",
  "Keylong",
  "Sarchu",
  "Leh",
  "Ghumarwin",
  "Chamba",
  "Palampur",
  "Baijnath",
  "Joginder Nagar",
  "Narkanda",
  "Rampur",
  "Sarahan",
  "Sangla",
  "Chitkul",
  "Aut",
  "Banjar",
  "Anni",
  "Pooh",
  "Kaza",
  "Chandigarh",
];

const FirstSection = () => {
  const { location, updateLocation, geoLocation, updateGeoLocation } =
    useStore();
  const router = useRouter();

  const HandleTracking = () => {
    if (location.dest && location.src) {
      router.push("/track");
    } else {
      alert("Fill The Details");
    }
  };

  return (
    <section className="w-full min-h-screen pb-7 flex relative items-center flex-col text-white">
      <Image
        alt=" "
        src={"/hmbg.jpg"}
        fill
        className="object-cover brightness-[.60] -z-10"
      ></Image>
      <Navbar color={true} />
      <div className="header w-[90%] md:w-[85%] -mt-10 flex-1 flex items-center justify-center flex-col">
        <div className="text flex flex-col w-[90%] ">
          <div className="desc text-xl text-white text-opacity-75 font-medium ml-1">
            A Tracking Website
          </div>
          <div className="Heading text-6xl leading-none font-bold tracking-wider">
            HIMACHAL <span className="">HRTC</span>
            {}
          </div>
        </div>
        <br />
        <div className="w-[90%] min-h-[130px] rounded-2xl bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-opacity-40 border-white items-center flex justify-around flex-wrap gap-4 px-5 py-8">
          <div className="form flex justify-around w-full gap-4 flex-wrap">
            <Select
              style={{ background: "transparent" }}
              showSearch
              className="max-w-[90%] w-[350px] "
              size="large"
              placeholder="Enter The Source"
              optionFilterProp="children"
              value={
                allLocations.indexOf(location.src) == -1
                  ? "Enter The Source"
                  : allLocations.indexOf(location.src)
              }
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={allLocations?.map((item, ind) => {
                return { value: ind, label: item };
              })}
              onChange={(val: number) => {
                updateLocation({
                  dest: location.dest,
                  src: allLocations[val],
                  date: "",
                });
              }}
            />
            <div
              className="btn flex justify-center items-center border-1 bg-[#FFFFFF78] active:bg-gray-600 active:scale-105 duration-200 p-3 rounded-lg"
              onClick={() => {
                let value = location;
                updateLocation({ src: value.dest, dest: value.src, date: "" });
              }}
            >
              <SwapOutlined size={130} color="white" />
            </div>
            {/* text-black px-5 bg-white bg-opacity-40 placeholder:text-black placeholder:text-opacity-60 placeholder:font-medium */}
            <Select
              showSearch
              className="max-w-[90%] w-[350px]"
              size="large"
              placeholder="Enter The Source"
              optionFilterProp="children"
              value={
                allLocations.indexOf(location.dest) == -1
                  ? "Enter The Destination"
                  : allLocations.indexOf(location.dest)
              }
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={allLocations?.map((item, ind) => {
                return { value: ind, label: item };
              })}
              onChange={(val: number) => {
                updateLocation({
                  dest: allLocations[val],
                  src: location.src,
                  date: "",
                });
              }}
            />
            <div className="btn flex gap-10">
              <Button
                type="primary"
                size="large"
                className=" bg-[#FFFFFF78] text-white bg-opacity-80 font-medium"
                onClick={HandleTracking}
              >
                Track
              </Button>
              <Button
                type="primary"
                size="large"
                className=" bg-[#FFFFFF78] text-white bg-opacity-80 font-medium"
              >
                Book
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
