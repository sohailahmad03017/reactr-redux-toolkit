import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {

    const loginDateFromReducer = useSelector((a) => a.loginReducer)
    console.log(loginDateFromReducer)

    return (
        <>
            <h1>Home</h1>
            <h1>Name: {loginDateFromReducer.userName}</h1>
            <h1>Email: {loginDateFromReducer.email}</h1>
            <h1>Password: {'*'.repeat(loginDateFromReducer.password.length)}</h1>
        </>
    )
}
