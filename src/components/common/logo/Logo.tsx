import React from 'react'
import Image from 'next/image'

export default function Logo({width, height}: LogoProps) {
    return (
        <>
            <Image src="/images/logo.png" alt="logo" width={width} height={height} />
        </>
    )
}

export type LogoProps = {
    width: number;
    height: number;
}