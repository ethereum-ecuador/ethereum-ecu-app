import React from 'react'

export default function TicketsButton() {
    return (
        <a href='https://www.eventbrite.com/e/lanzamiento-conferencia-road-to-blockchain-week-ecuador-dia-1-legal-tech-tickets-618618714227'
            target='_blank'
            rel='noopener noreferrer'
            className='flex justify-center items-center'>
            <button className='text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' style={{ borderRadius: '9999px' }}>
                Tickets
            </button>
        </a>
    )
}
