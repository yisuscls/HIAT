"use client";
import { use, useState } from "react";
import NavBar from "../components/header";
import PageWrapper from "../components/pageWrapper";
import SidebarWithLogo from "../components/sideBar";
import { FaSleigh } from "react-icons/fa";
export default function Home({children}: any) {
const [viewBar, setviewBar] = useState(false);

  return (
  <div className="flex min-h-screen" > 
      <SidebarWithLogo showSidebar={viewBar} setShowSidebar={setviewBar}  >
      </SidebarWithLogo>
      <NavBar showSidebar={viewBar} setShowSidebar={setviewBar}></NavBar>
    <PageWrapper>
      {children}
    </PageWrapper>
  </div>
  );
}
