import { desc } from 'motion/react-client'
import Link from 'next/link'
import React, { ReactNode } from 'react'

interface ArticleListProps {
    children: ReactNode,
    className: string,
    props: {
        
    }
}

function ArticleList({children, className}: ArticleListProps) {

    const getArticles = [
        {
            title: "Cultural Identity - What Does It Mean to Be Filipino?",
            desc: "Learn about the diversity of Filipino identity, from regional traditions to indigenous communities, and how history has shaped the nation.",
            year: 2026
        },
        {
            title: "Cultural Arts & Artisans - Keeping Filipino Artisans Alive",
            desc: "Discover traditional Filipino arts, crafts, and the artisans behind them. Explore weaving, pottery, carving, and more that have been passed down for generations.",
            year: 2026
        }
    ]
    
    return (
        <div className='flex flex-col pt-4'>
            { getArticles.map((item) => 
                <Link href={"/articles"} key={item.title} className="flex px-4 py-1">
                    <aside className='pt-1 text-gray-500' key={item.year}>{item.year}</aside>
                    <div>
                        <h1 className='px-4 pt-1 font-bold' key={item.title}>{item.title}</h1>
                        <p className='px-4 pt-1' key={item.desc}>{item.desc}</p>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default ArticleList