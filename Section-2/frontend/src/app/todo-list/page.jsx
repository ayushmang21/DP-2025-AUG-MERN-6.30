'use client';
import React, { useState } from 'react'

const TodoList = () => {

    // let count = 10;
    // const [count, setCount] = useState(0);
    const [taskList, setTaskList] = useState([]);

    const addTask = (e) => {
        if (e.code === 'Enter') {
            // console.log(e.target.value);

            const newTask = {
                text: e.target.value,
                completed: false,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
            };

            setTaskList([newTask, ...taskList]); // spread operator - to copy existing items

            console.log(taskList);
            
            e.target.value = '';
        }
    }

    return (
        <div className='bg-gray-300 min-h-screen'>
            <h1 className='text-center text-4xl font-bold py-10'>ToDo List</h1>

            {/* <h1 className='text-4xl' >{count}</h1>
            <button className='border block mt-5 p-5'
                onClick={() => {
                    setCount(count + 1);
                    console.log(count);
                }}
            >Add</button> */}


            <div className='container mx-auto rounded-md shadow-lg bg-white'>
                <div className='p-5'>
                    <input
                        onKeyDown={addTask}
                        className='border-2 p-3 rounded w-full block'
                        placeholder='Add a new task here...'
                        type="text" />
                </div>
            </div>

        </div>
    )
}

export default TodoList;