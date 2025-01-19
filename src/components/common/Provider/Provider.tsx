'use client'
import { store } from '@/redux/store';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import { Provider } from 'react-redux';



const GlobalProvider = ({children} : {children: React.ReactNode}) => {
    return (
        <div> 
            <Provider store={store}>
            <NextUIProvider>           
                {children}
             </NextUIProvider>
             </Provider>
        </div>
    );
};

export default GlobalProvider;