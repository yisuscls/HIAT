
import { Children } from "react";
import NavBar from "./components/header";
import PageWrapper from "./components/pageWrapper";
import SidebarWithLogo from "./components/sideBar";
export default function Home() {
  return (
  <div> 
    <SidebarWithLogo></SidebarWithLogo>
    <NavBar></NavBar>
    <PageWrapper></PageWrapper>
  </div>
  );
}
