'use client';
import React from 'react'

const EventHandling = () => {

    const previewImage = (e) => {
        const file = e.target.files[5];
        const reader = new FileReader();

        reader.onload = (data) => {
            const img = document.createElement("img");
            img.src = data.target.result;
            img.className = "h-40 mt-5";
            document.body.appendChild(img);
        }
        reader.readAsDataURL(file);
    }

    return (
        <div
            className='container mx-auto py-5 cursor-non'
        // onMouseMove={(e) => {
        //     const circle = document.getElementById('target');
        //     circle.style.left = e.clientX - 20 + "px";
        //     circle.style.top = e.clientY - 20 + "px";
        // console.log(e.clientX, e.clientY);
        // }}
        >
            <h1>Event Handling Page</h1>

            {/* <div className='-z-1 size-8 bg-amber-500 rounded-full absolute' id='target' ></div> */}

            {/* <img className='-z-1 h-15 absolute' src="https://pngimg.com/d/moon_PNG51.png" id='target' alt="" /> */}

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

            <input
                type="text"
                className='border p-3 block mt-5'
                onKeyDown={(e) => {
                    console.log(e.key, e.code);
                }}
            />

            <textarea className='border-2' rows={2} cols={20}></textarea>

            <input type="file" className='block mt-5'
                onChange={previewImage}
                accept='image/png'
                multiple
            />

        </div>
    )
}

export default EventHandling;