import Link from 'next/link'
import React, { ReactNode } from 'react'

interface NavItemProps {
    children: ReactNode,
    ref: string,
    className: string
}

function NavItem({children, className, ref}: NavItemProps) {
    return (
        <ul className={'p-2 select-none font-bold hover:animate-(--bounce) ' + className}>
            <Link href={"/" + ref} style={{
                color: "inherit",
                background: "inherit"
            }}>
                {children}
            </Link>
        </ul>
    )
}

export default NavItem