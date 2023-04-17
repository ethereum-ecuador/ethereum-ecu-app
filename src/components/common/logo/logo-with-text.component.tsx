import React from 'react'
import { Logo } from './logo.component'

export function LogoWithText({ width = 25, height = 25, classname='' }) {
    return (
        <a href="#" className={`font-bold flex flex-row items-center text-xl ${classname}`}>
            <Logo width={width} height={height} />
            <span style={{ marginLeft: '10px' }}>ETH Tricolor</span>
        </a>
    )
}
