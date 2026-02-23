"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "motion/react"

interface IndexProps {
    props: {
        
        
    }
}

export default function Home() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true
    })
    return (
        <div className="flex min-h-screen items-center justify-center font-sans ">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start">
                <Link href={"/home"} >
                    <div></div>
                    <h1>
                        Kumusta!
                    </h1>
                    <p>
                        Leave your footwear at the door before entering
                    </p>
                    
                </Link>
            </main>
        </div>
    );
}
