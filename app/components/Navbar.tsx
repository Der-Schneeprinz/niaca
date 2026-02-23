"use client"
import React, { ReactNode } from 'react'
import NavList from './NavList'
import NavItem from './NavItem'


function Navbar() {
    const getNavList = [
        {
            name: "home",
            color: "red"
        },
        {
            name: "articles",
            color: "yellow"
        },
        {
            name: "references",
            color: "blue"
        }
    ]

    return (
        <nav className='pr-2 py-1 align-right'>
            <NavList>
                <NavItem ref='/' className='font-black'>NIACA</NavItem>
                {getNavList.map((item) => <NavItem className={"bg-"+ item.color} key={item.name} ref={item.name}>{item.name}</NavItem>)}
            </NavList>
        </nav>
    )
}

export default Navbar