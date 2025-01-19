'use client'
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { Button } from '@nextui-org/react';
import React from 'react';

const AboutPage = () => {
    const users = useAppSelector((state:RootState) => state.user.users);
    console.log('Redux users', users)
    return (
        <div>
                About Page
               <Button color="primary">Click me</Button>
        </div>
    );
};

export default AboutPage;