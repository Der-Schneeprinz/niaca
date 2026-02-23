import React, { ReactNode } from 'react'

interface NavListProps {
    children: ReactNode
}

function NavList({ children }: NavListProps) {
    return (
        <li className='flex-1 flex list-none'>
            {children}
        </li>
    )
}

export default NavList