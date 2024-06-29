import { BsList } from "react-icons/bs";

export default function NavBar() {
    return (
        <header className="fixed bg-[#009c4f] w-full z-0 px-4 shadow-sm shadow-slate-500/40 pl-[20rem]">
            <div className="flex items-center justify-between h-16">
                <button className="bg-[#009c4f] text-white hover:bg-green-400 ml-3 rounded-md h-8 shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center border border-green-500 w-8">
                    <BsList></BsList>
                </button>
            </div>
        </header>
    );
}