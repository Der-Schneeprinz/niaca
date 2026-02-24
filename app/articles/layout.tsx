import React from 'react'

interface MDXPage {
    children: React.ReactNode
}

function layout({ children }: MDXPage) {
    return (
        <div className='antialiased max-w-xl mx-4 mt-8 lg:mx-auto geist'>{children}</div>
    )
}

export default layout