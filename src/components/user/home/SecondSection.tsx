import Image from "next/image";
import React from "react";

const SecondSection = () => {
  return (
    <>
      <section className="w-full py-20 flex flex-col items-center justify-center gap-3">
        <div className="heading text-4xl font-bold">About Us</div>
        <div className="desc text-lg md:w-[700px] max-h-[90%] text-center">
          {
            "A bus tracking and ticketing website is an online platform that simplifies the process of booking bus tickets and enhances the overall travel experience. It provides users with detailed information about bus routes, including stops and journey durations, enabling them to make informed choices. Passengers can book tickets, select preferred seats, and receive e-tickets, making the booking process efficient and convenient. Real-time bus tracking is a crucial feature, allowing travelers to monitor their bus's location, plan arrivals, and reduce waiting times. The website also offers customer support, reviews, and cancellation options, ensuring a seamless and customer-centric bus travel experience."
          }
        </div>
      </section>

      <section className="w-full h-[70vh] relative flex items-center flex-col p-4">
        <Image alt="" src={"/f-6.jpg"} fill className="blur-sm object-cover -z-10"></Image>
        <div className="content">
          <div className="heading text-4xl font-bold">Safty Measures</div>
        </div>
      </section>
      <section className="w-full h-[50vh]"></section>
    </>
  );
};

export default SecondSection;
