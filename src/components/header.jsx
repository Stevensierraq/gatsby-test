import React from 'react'

import hackerImg from '../imgs/hacker.svg'
import SubscribeButton from '../components/contact_form'

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl flex justify-center">
            <div className="flex-1">
                <h1 className="font-bold text-purple-700 text-6xl leading-tight">Steven Sierra</h1>
                <p className="text-xl font-light mt-1">this is a website with gatsby</p>
            </div>
            <img src={hackerImg} alt="hacker image" style={{height: "300px"}}/>
        </div>
        <SubscribeButton /> 
    </header>
)