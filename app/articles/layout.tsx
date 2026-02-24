import React from 'react'
import "./style.css"

interface MDXPage {
    children: React.ReactNode
}



function layout({ children }: MDXPage) {
    return (
        <div className='antialiased max-w-xl mx-4 lg:mx-auto geist flex flex-col format'>{children}</div>
    )
}

export default layout