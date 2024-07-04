import { ReactNode } from 'react';
import { FaFileArrowUp } from 'react-icons/fa6'
import { IoReloadOutline   } from 'react-icons/io5';
export default function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="bg-slate-100 flex-grow text-black p-2 mt-16 ">
            {children}
            <div className='grid grid-cols-12 grid-rows-auto gap-x-0 pl-12'>
                <div className='col-start-10 col-span-3  row-start-1 justify-normal space-x-2' >
                    <button className="bg-[#009c4f] hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full">
                        <div className='flex justify-normal space-x-1'>
                            <FaFileArrowUp >
                            </FaFileArrowUp >
                            <p>Insert</p>
                        </div>
                    </button>
                    <button className="bg-[#009c4f] hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full">
                        <div className='flex justify-normal space-x-1'>
                            <IoReloadOutline >
                            </IoReloadOutline   >
                            <p>Reload</p>
                        </div>
                    </button>
                </div>

            </div>


        </div>
    );
}