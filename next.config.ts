import type { NextConfig } from "next";
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    /* config options here */
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [ 
            {
                protocol: "http",
                hostname: "assets.vercel.com",
                port: "",
                pathname: "/images/upload/**"
            } 
        ]
    }
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)