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
                <div className='p-5 border-t-1'>
                    {
                        taskList.map((task, index) => {
                            return (
                                <div 
                                style={{borderColor: task.completed ? 'green' : 'red'}}
                                className='border-4 rounded-lg p-4 mb-4 flex justify-between items-center'>
                                    <div className='flex gap-3'>
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={(e) => {
                                                const temp = taskList;
                                                temp[index].completed = e.target.checked;
                                                setTaskList([...temp]);
                                            }}
                                        />

                                        <p className='text-2xl'>{task.text}</p>

                                    </div>
                                    <p>{task.date} at {task.time}</p>
                                    <button className='bg-red-600 text-white px-4 py-2 rounded-xl'>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default TodoList;