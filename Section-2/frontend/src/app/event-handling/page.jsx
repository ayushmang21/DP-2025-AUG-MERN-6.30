'use client';
import React from 'react'

const EventHandling = () => {
    return (
        <div>
            <h1>Event Handling Page</h1>

            <button
                onClick={() => { alert('Button was Clicked..!!') }}
                // onClick={ alert('Button was Clicked..!!') }
                className='bg-blue-600 text-white p-4 text-2xl'>
                Click Event
            </button>

            <input type="text"
                className='border p-3 mt-5 block bg-black text-white'
                onChange={(e) => {
                    console.log(e.target.value);
                }}
            />

            <input
                type="color"
                className='mt-5'
                onChange={(e) => { document.body.style.backgroundColor = e.target.value }}
            />

        </div>
    )
}

export default EventHandling;