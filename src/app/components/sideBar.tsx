import Image from "next/image";
export default function SideBar() {
    return (
        <aside className="sideBar shadow-gray-900/20 transition-300 ease-in-out w-60 rounded ">
            <div className="divide-y divide-green-500 divide-y-4">
                <div className="flex relative items-center py-5 px-3.5">
                    <Image className="w-14 mx-3.5 min-h-fit"
                        alt="logo uprm" src="/logo-uprm-white.png" width={60} height={60} />
                    <h3 className="pl-1 logo-name text-4xl">
                        HIAT
                    </h3>
                </div>
                <div>
                    
                </div>
            </div>


        </aside>
    );
}