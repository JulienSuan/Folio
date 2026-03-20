"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
export default function NavigationElement({children, imageSrc}) {

  const pathname = usePathname();
  const isActive = pathname === `/${children.toLowerCase()}`;

  return (
    <Link 
    href={`/${children.toLowerCase()}`}  className={`
      group
      relative
      p-2 px-3
      transition
      rounded-md
      text-base-content/55
      hover:translate-x-1
      gap-4
      flex items-center
      hover:bg-base-100
      hover:text-base-content/85
      ${isActive ? "bg-neutral/40 shadow text-base-content/100 translate-x-1 " : ""}
      `}>
      <Image className={`${isActive ? "opacity-100 " : "opacity-55 group-hover:opacity-85"}`} alt='sword' width={20} height={20} src={`${imageSrc}`}></Image>
          <p className='text-xl'>{children}</p>
        <div className={`absolute right-1.5 h-7.5 w-1 rounded-md bg-secondary 
        ${isActive ? "opacity-100" : "opacity-0"}`} />
    </Link>
  )
}
