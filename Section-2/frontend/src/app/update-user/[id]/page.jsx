'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const UpdateUser = () => {

    const { id } = useParams();
    const [userData, setUserData] = useState(null);

    const fetchUserData = async () => {
        // Fetch user data based on the id
        const res = await axios.get(`http://localhost:5000/user/getbyid/${id}`);
        console.log(res.data);
        setUserData(res.data);
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleUpdate = async (values) => {
        console.log(values);
    }

    return (
        <div>
            <h1 className='text-3xl py-5 text-center font-bold'>Update User</h1>

            <div className='container mx-auto bg-amber-300 p-10 rounded-lg shadow-lg'>
                {
                    userData === null ? (
                        <p>Loading...Please Wait</p>
                    ) : (
                        <Formik
                            initialValues={userData || { name: '', email: '', password: '', confirmPassword: '' }}
                            onSubmit={handleUpdate}
                            enableReinitialize={true}
                        >
                            {
                                (updateForm) => {
                                    return (
                                        <form onSubmit={updateForm.handleSubmit}>
                                            <div className="grid gap-y-4">
                                                {/* Form Group */}
                                                <div>
                                                    <label
                                                        htmlFor="name"
                                                        className="block text-sm mb-2 dark:text-white"
                                                    >
                                                        Name
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="name"
                                                            id="name"
                                                            name="name"
                                                            onChange={updateForm.handleChange}
                                                            value={updateForm.values.name}
                                                            className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                            required=""
                                                            aria-describedby="name-error"
                                                        />
                                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                            <svg
                                                                className="size-5 text-red-500"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                                aria-hidden="true"
                                                            >
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    {
                                                        (updateForm.errors.name && updateForm.touched.name) && (
                                                            <p className='text-sm text-red-600 font-medium mt-2'>
                                                                {updateForm.errors.name}
                                                            </p>
                                                        )
                                                    }
                                                </div>
                                                {/* End Form Group */}
                                                {/* Form Group */}
                                                <div>
                                                    <label
                                                        htmlFor="email"
                                                        className="block text-sm mb-2 dark:text-white"
                                                    >
                                                        Email address
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            onChange={updateForm.handleChange}
                                                            value={updateForm.values.email}
                                                            className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                            required=""
                                                            aria-describedby="email-error"
                                                        />
                                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                            <svg
                                                                className="size-5 text-red-500"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                                aria-hidden="true"
                                                            >
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    {
                                                        (updateForm.errors.email && updateForm.touched.email) && (
                                                            <p className='text-sm text-red-600 font-medium mt-2'>
                                                                {updateForm.errors.email}
                                                            </p>
                                                        )
                                                    }
                                                </div>
                                                {/* End Form Group */}
                                                {/* Form Group */}
                                                <div>
                                                    <label
                                                        htmlFor="password"
                                                        className="block text-sm mb-2 dark:text-white"
                                                    >
                                                        Password
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="password"
                                                            id="password"
                                                            name="password"
                                                            onChange={updateForm.handleChange}
                                                            value={updateForm.values.password}
                                                            className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                            required=""
                                                            aria-describedby="password-error"
                                                        />
                                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                            <svg
                                                                className="size-5 text-red-500"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                                aria-hidden="true"
                                                            >
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    {
                                                        (updateForm.errors.password && updateForm.touched.password) && (
                                                            <p className='text-sm text-red-600 font-medium mt-2'>
                                                                {updateForm.errors.password}
                                                            </p>
                                                        )
                                                    }
                                                </div>
                                                {/* End Form Group */}
                                                {/* Form Group */}
                                                <div>
                                                    <label
                                                        htmlFor="confirmPassword"
                                                        className="block text-sm mb-2 dark:text-white"
                                                    >
                                                        Confirm Password
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="password"
                                                            id="confirmPassword"
                                                            name="confirmPassword"
                                                            onChange={updateForm.handleChange}
                                                            value={updateForm.values.confirmPassword}
                                                            className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                            required=""
                                                            aria-describedby="confirm-password-error"
                                                        />
                                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                            <svg
                                                                className="size-5 text-red-500"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                                aria-hidden="true"
                                                            >
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    {
                                                        (updateForm.errors.confirmPassword && updateForm.touched.confirmPassword) && (
                                                            <p className='text-sm text-red-600 font-medium mt-2'>
                                                                {updateForm.errors.confirmPassword}
                                                            </p>
                                                        )
                                                    }
                                                </div>
                                                {/* End Form Group */}
                                                {/* Checkbox */}
                                                <div className="flex items-center">
                                                    <div className="flex">
                                                        <input
                                                            id="remember-me"
                                                            name="remember-me"
                                                            type="checkbox"
                                                            className="shrink-0 mt-0.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                        />
                                                    </div>
                                                    <div className="ms-3">
                                                        <label htmlFor="remember-me" className="text-sm dark:text-white">
                                                            I accept the{" "}
                                                            <a
                                                                className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                                                                href="#"
                                                            >
                                                                Terms and Conditions
                                                            </a>
                                                        </label>
                                                    </div>
                                                </div>
                                                {/* End Checkbox */}
                                                <button
                                                    type="submit"
                                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                                >
                                                    Sign up
                                                </button>
                                            </div>
                                        </form>
                                    )
                                }
                            }
                        </Formik>
                    )
                }
            </div>

        </div>
    )
}

export default UpdateUser;