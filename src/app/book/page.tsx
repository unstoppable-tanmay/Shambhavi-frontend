"use client";

import { Button, DatePicker, Input } from "antd";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { SwapOutlined } from "@ant-design/icons";

const Page = () => {
  return (
    <main className="w-screen h-screen flex items-center flex-col relative overflow-hidden">
      <div className="p-3 rounded-full absolute top-3 left-3 shadow-lg flex items-center justify-center z-50 bg-white">
        <ArrowLeftOutlined
          style={{ fontSize: "130%" }}
          onClick={() => {
            window.history.back();
          }}
        />
      </div>
      <div className="w-full h-full absolute backdrop-blur-lg flex justify-center items-center">
        <div className="search w-[80%] rounded-2xl bg-gray-50 p-5 py-10 flex-wrap gap-6 flex shadow-lg justify-around">
          <Input
            size="large"
            placeholder="Enter The Source"
            className="max-w-[30%] min-w-[350px]"
            height={70}
          ></Input>
          <div className="btn flex justify-center items-center border-1 bg-gray-200 hover:bg-gray-300 duration-200 p-3 rounded-lg">
            <SwapOutlined size={130} color="white" />
          </div>
          <Input
            size="large"
            placeholder="Enter The Destination"
            className="max-w-[30%] min-w-[350px]"
            height={70}
          ></Input>
          <DatePicker />
          <Button type="primary" className="bg-blue-600" size="large">
            Search
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Page;
