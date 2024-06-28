
import { Children } from "react";
import NavBAr from "./components/header";
import PageWrapper from "./components/pageWrapper";
import SidebarWithLogo from "./components/sideBar";
export default function Home() {
  return (
  <div> 
    <SidebarWithLogo></SidebarWithLogo>
    <NavBAr></NavBAr>
    <PageWrapper></PageWrapper>
  </div>
  );
}
