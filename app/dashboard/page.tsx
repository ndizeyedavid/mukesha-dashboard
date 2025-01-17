"use client";
import React from "react";
import Analytic from "@/components/_mine/Analytic";
import VisitChart from "@/components/_mine/VisitChart";

export default function page() {
  return (
    <>
      <Dashboard />
      {/* <p>asdasd</p> */}
    </>
  );
}

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 w-full h-full gap-2 p-2 bg-white border md:p-10 rounded-tl-2xl border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="grid grid-cols-4 gap-2">
          <Analytic title="Projects" nbr="67" />
          <Analytic title="Likes" nbr="67.5K" />
          <Analytic title="Total Views" nbr="192M" />
          <Analytic title="Feedbacks" nbr="82" />
        </div>

        <div className="flex flex-1 gap-2 mt-2">
          <div className="w-[700px] h-[700px] mx-auto bg-gray-100 rounded-lg dark:bg-neutral-800">
            <VisitChart />
          </div>
        </div>
      </div>
    </div>
  );
};
