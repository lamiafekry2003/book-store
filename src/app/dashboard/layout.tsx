import React from "react";
import MasterLayout from "../Layouts/MasterLayout/layout";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Topbar from "@/components/Shared/Topbar/Topbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Topbar/>
      <Navbar/>
      <MasterLayout>
        {children}
      </MasterLayout>
       
     
    </div>
  );
}
