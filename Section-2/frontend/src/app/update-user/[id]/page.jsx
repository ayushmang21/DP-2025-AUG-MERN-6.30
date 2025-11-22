'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const UpdateSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Naam nhi hai kya..?'),
    email: Yup.string().email('Invalid email').required('Email chahiye bhai..!'),
    password: Yup.string()
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/\W/, "Password must contain at least one special character")
        .min(8, 'Password too short')
        .required('Password chahiye bhai..!'),
    confirmPassword: Yup.string().required('Confirm your password').oneOf([Yup.ref('password')], 'Passwords alag hai bhai..!')
});

const UpdateUser = () => {
    const { id } = useParams();
    const router = useRouter();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const fetchUserData = async () => {
        const res = await axios.get(`http://localhost:5000/user/getbyid/${id}`);
        console.log(res.data);
        setUserData({
            name: res.data.name || '',
            email: res.data.email || '',
            password: '',
            confirmPassword: ''
        });
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleUpdate = async (values) => {
        console.log(values);

        const res = await axios.put(`http://localhost:5000/user/update/${id}`, values);
        if (res.status === 200) {
            toast.success('User Updated Successfully');
            router.push('/manage-users');
        } else {
            toast.error('Error in Updating User');
        }
    };

    return (
        <div>
            <h1 className='text-3xl py-5 text-center font-bold'>Update User</h1>

            <div className='container mx-auto w-1/2 bg-amber-300 p-10 rounded-lg shadow-lg'>
                {
                    userData === null ? (
                        <p>Loading...Please Wait</p>
                    ) : (
                        <Formik
                            initialValues={userData}
                            onSubmit={handleUpdate}
                            enableReinitialize={true}
                            validationSchema={UpdateSchema}
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
                                                        className="block text-sm mb-2 dark:text-black"
                                                    >
                                                        Name
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
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
                                                        className="block text-sm mb-2 dark:text-black"
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
                                                        className="block text-sm mb-2 dark:text-black"
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
                                                        className="block text-sm mb-2 dark:text-black"
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
                                                        <label htmlFor="remember-me" className="text-sm dark:text-black">
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
                                                    Update
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