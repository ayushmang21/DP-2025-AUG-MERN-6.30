import Btn from '@/components/Btn';
import Card from '@/components/Card';
import Navbar from '@/components/Navbar';
import React from 'react'

const Home = () => {
    return (
        <>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <a href="/login">Login</a>
            <Navbar />
            <Btn />
            <Btn />
            <Btn />
            <Card title={"AI is Dangerous"} description={"Bas mann kiya "}/>
            <Card title={"Hello"} description={"ByeBye"}/>
        </>
    )
}

export default Home;