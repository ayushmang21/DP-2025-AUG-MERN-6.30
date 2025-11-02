'use client'; 
import React from 'react'

const TodoList = () => {

    // let count = 10;
    const [first, setfirst] = useState(second)

    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-5'>ToDo List</h1>

            <h1 className='text-4xl' >{count}</h1>
            <button className='border block mt-5 p-5'
                onClick={() => {
                    count = count + 1; 
                    console.log(count);
                }}
            >Add</button>
        </div>
    )
}

export default TodoList;