'use client';
import SimpleForm from '@/components/common/SimpleForm';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { removeCustomer } from '@/redux/slice/contactSlice';
import { RootState } from '@/redux/store';
import React from 'react';

const ContactPage = () => {
    const customers = useAppSelector((state: RootState) => state.contact.Customers);
    const dispatch = useAppDispatch();
    console.log("contact page ", customers);

    return (
        <div>
            <SimpleForm />
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-500">ID</th>
                            <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">Name</th>
                            <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">Email</th>
                            <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">Role</th>
                            <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">Password</th>
                            <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">{customer.id}</td>
                                <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">{customer.name}</td>
                                <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">{customer.email}</td>
                                <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">{customer.role}</td>
                                <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">{customer.password}</td>
                                <td className='text-red-500 px-4 py-2 border border-gray-300 text-sm cursor-pointer' onClick={() => dispatch(removeCustomer(customer.id))}>Delete</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactPage;
