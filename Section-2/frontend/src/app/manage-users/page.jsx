'use client';
import axios from 'axios';
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

    console.log(userList);

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className='bg-sky-300 min-h-screen py-20'>
            <h1 className='text-center font-bold text-3xl mb-10 '>Manage Users</h1>

            <div className='container mx-auto bg-sky-700'>
                {
                    loading ? (
                        <p>Loading....Please Wait....!!</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Registered At</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    )
                }
            </div>
        </div>
    )
}

export default manageUsers;