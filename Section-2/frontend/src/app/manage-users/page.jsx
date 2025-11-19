'use client';
import { IconPencilCheck, IconTrash } from '@tabler/icons-react';
import axios from 'axios';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'

const manageUsers = () => {

    const [loading, setLoading] = useState(false);
    const [userList, setuserList] = useState([]);

    const fetchUsers = async () => {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/user/getall')
        console.log(res.data);
        setuserList(res.data);
        setLoading(false);
    }

    // console.log(userList);

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className='bg-sky-700 min-h-screen py-20'>
            <h1 className='text-center font-bold text-3xl mb-10 '>Manage Users</h1>

            <div className='container mx-auto bg-sky-500 p-2'>
                {
                    loading ? (
                        <p>Loading....Please Wait....!!</p>
                    ) : (
                        <table className='w-full border-2 shadow-2xl p-10'>
                            <thead className='bg-sky-950 text-white text-xl'>
                                <tr className='text-left border-b-2 border-black'>
                                    <th className='p-4'>Name</th>
                                    <th className='p-4'>Email</th>
                                    <th className='p-4'>Registered At</th>
                                    <th className='p-4'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='text-left'>
                                {
                                    userList.map((user) => {
                                        return (
                                            <tr key={user._id} className='border-b-2'>
                                                <td className='p-2'>{user.name}</td>
                                                <td className='p-2'>{user.email}</td>
                                                <td className='p-2'>{user.createdAt}</td>
                                                <td className='p-2'>
                                                    <button>
                                                        <Link href={`/update-user/${user._id}`}>
                                                            <IconPencilCheck />
                                                        </Link>
                                                    </button>
                                                    <button className='bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg border-2 ml-4'>
                                                        <IconTrash size={24} />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        </div>
    )
}

export default manageUsers;