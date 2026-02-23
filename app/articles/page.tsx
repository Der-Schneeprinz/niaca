import React, { ReactNode } from 'react'
import ArticleItem from '../components/ArticleItem';

interface ArticleProps {
    children: ReactNode;
}

function Articles() {
    return (
        <div className='w-8/10 w-max-8/10 px-5 py-3'>
            <h1 className='font-bold'>Articles</h1>
            <ArticleItem className='' children={undefined} props={{}}></ArticleItem>
        </div>
    )
}

export default Articles