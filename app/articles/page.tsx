import React, { ReactNode } from 'react'
import ArticleList from '../components/ArticleList';

interface ArticleProps {
    children: ReactNode;
}

function Articles() {
    return (
        <div className='w-8/10 w-max-8/10 px-5 py-3'>
            <h1 className='font-bold'>Articles</h1>
            <p> Learn More: Explore Filipino Culture in Depth</p>
            <ArticleList className='' children={undefined} props={{}}></ArticleList>
        </div>
    )
}

export default Articles