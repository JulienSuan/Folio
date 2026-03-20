import Image from 'next/image'
import React from 'react'

export default function not_found() {
  return (
    <div className='flex items-center justify-center w-full flex-col'>
      <h1 className='text-9xl text-base-content font-bold'>404</h1>
      <Image width={500} height={500} src={"/404.png"} alt='404'></Image>
    </div>
  )
}
