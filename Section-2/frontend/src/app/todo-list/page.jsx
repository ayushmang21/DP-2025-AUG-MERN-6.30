'use client';
import { IconTrashX } from '@tabler/icons-react';
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

    const deleteTask = (index) => {
        console.log(index);
        const temp = taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
    };

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
                                    key={index}
                                    style={{
                                        borderColor: task.completed ? 'limegreen' : 'red',
                                        backgroundColor: task.completed ? '#ddffdd' : '#ffdddd'
                                    }}
                                    className='border-4 rounded-lg p-4 mb-4 flex justify-between items-center'>
                                    <div className='flex gap-3'>
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={(e) => {
                                                const temp = taskList;
                                                temp[index].completed = e.target.checked;
                                                console.log(temp[index]);
                                                setTaskList([...temp]);
                                            }}
                                        />

                                        <p
                                            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                                            className='text-2xl wrap-anywhere max-w-[600px]'>
                                            {task.text}
                                        </p>

                                    </div>
                                    <p>{task.date} at {task.time}</p>
                                    <button
                                        onClick={() => deleteTask(index)}
                                        className='bg-red-600 text-white px-4 py-2 rounded-xl'>
                                        <IconTrashX size={40} color='black' />
                                    </button>
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