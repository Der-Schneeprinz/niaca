import Link from 'next/link'
import React, { ReactNode } from 'react'

interface NavItemProps {
    children: ReactNode,
    ref: string,
    className: string
}

function NavItem({children, className, ref}: NavItemProps) {
    return (
        <ul className={'p-2 '}>
            <Link href={"/" + ref} className={className}>
                {children}
            </Link>
        </ul>
    )
}

export default NavItem