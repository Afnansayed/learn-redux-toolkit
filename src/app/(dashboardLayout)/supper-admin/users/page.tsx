'use client';

import { useGetServiceQuery } from '@/redux/RtkQueryApi/ServiceApi/serviceApi';
import React from 'react';

const UserPage = () => {
    const { data, isLoading, error } = useGetServiceQuery({});

    // Debug: Log the states for better insight
    console.log({ data, isLoading, error });

    // Handle loading and error states
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;

    return (
        <div>
            {data && data.length > 0 ? (
                data.map((post: { name: string }, idx: number) => (
                    <div key={idx}>
                        <h2>{post.name}</h2>
                    </div>
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default UserPage;
