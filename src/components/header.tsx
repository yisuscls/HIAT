import { Dispatch, SetStateAction } from "react";
import { BsList } from "react-icons/bs";
interface SideBarProps {
    showSidebar: boolean;
    setShowSidebar: Dispatch<SetStateAction<boolean>>;
}
export default function NavBar({ showSidebar, setShowSidebar }: SideBarProps) {
    return (
        <header className="fixed bg-white w-full z-0 px-4 shadow-sm shadow-slate-500/40 ">
            <div className="flex items-center justify-between h-16">
                <button onClick={() => setShowSidebar(!showSidebar)} className="bg-[#009c4f] text-white hover:bg-green-400 ml-3 rounded-md h-8 shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center border border-green-500 w-8">
                    <BsList></BsList>
                </button>
                <div className="h-10 w-10 rounded-full bg-[#009c4f] flex items-center justify-center text-center text-white">
                    <span>JC</span>
                </div>
            </div>
        </header>
    );
}