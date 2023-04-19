import React from 'react'

interface CountdownTextProps {
    title: string;
    number: number;
}

export default function CountdownText({ title, number}: CountdownTextProps) {
    return (
        // <div className="flex flex-col items-center border-solid border-2 border-white rounded-full px-10 py-4">
        <div className="flex flex-col items-center">
            <span className="countdown font-mono text-3xl sm:text-4xl lg:text-6xl text-white">{number}</span>
            <span className="text-white">{title}</span>
        </div>
    )
}