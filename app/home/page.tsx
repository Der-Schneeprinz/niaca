import Image from 'next/image'
import React from 'react'
import masthead from '../res/masthead-3.webp'
import Link from 'next/link'

function Home() {
    return (
        <div className='px-2 py-2'>
            <Image
                src={masthead}
                width="1920"
                height="1080"
                alt="Filipinos in traditional clothing and dancing" />
            <div className='backdrop-blur-lg'>
                <h1 className='font-bold pt-5'>Roots of the Filipino Soul</h1>
                <p className='pt-2'>
                    In a world shaped by modernization and foreign influence, many cultural roots are slowly fading from memory. This website serves as a space for learning and reflection, highlighting Filipino identity, traditions, languages, and creative heritage that have defined generations.
                </p>
                <div className='pt-3'></div>
                <Link href="/articles" className='bg-transparent border-2 py-1.5 px-3 btn btn-back bg-red rounded-xl hover:border-red-800 '>Read more</Link>
            </div>
        </div>
    )
}

export default Home