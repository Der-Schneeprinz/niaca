import Image from 'next/image'
import React from 'react'
import masthead from '../res/masthead-2.webp'
import Link from 'next/link'

function Home() {
    return (
        <div className='px-2'>
            <Image
                src={masthead}
                width="1920"
                height="1080"
                style={{
                    minWidth: "100%",
                    height: "auto"
                }}
                alt="Filipinos in traditional clothing and dancing" />
            <h1 className='font-bold pt-5'>Roots of the Filipino Soul</h1>
            <p className='pt-2'>
                In a world shaped by modernization and foreign influence, many cultural roots are slowly fading from memory. This website serves as a space for learning and reflection, highlighting Filipino identity, traditions, languages, and creative heritage that have defined generations.
            </p>
            <Link href="/articles" className='btn btn-yellow bg-red'>Get Started</Link>
        </div>
    )
}

export default Home