import React from 'react';

export default function ImagePanel() {
    return (
        <div className='flex justify-center items-center '>
            <div className="w-full p-4 text-center items-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <img src="/logo-uprm.png" alt="logo-uprm" className='w-96 mx-auto' />
            </div>
        </div>
    );
}
