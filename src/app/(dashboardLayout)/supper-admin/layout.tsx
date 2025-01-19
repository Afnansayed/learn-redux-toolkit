import React from 'react';

const layout = ({children }: {children: React.ReactNode}) => {
    return (
        <div className='flex'>
            <h1 className='bg-red-500 text-white h-screen min-w-[200px]'>Dashboard</h1>
            <div className='flex-grow'>
                <h1 className='bg-cyan-200'>Header</h1>
                {children}
            </div>
        </div>
    );
};

export default layout;