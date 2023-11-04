import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css';
import React from "react";
import Providers from "@/components/Providers";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Graphql Apis||Endpoints',
    description: 'Graphql endpoints',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}><Providers>{children}</Providers></body>
        </html>
    )
}
