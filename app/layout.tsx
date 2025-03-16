// import type React from "react"
// import "./globals.css"
// import type { Metadata } from "next"
// import { Inter, Playfair_Display } from "next/font/google"

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
// const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

// export const metadata: Metadata = {
//   title: "Monarch Painters | Elevate Your Space with Timeless Elegance",
//   description: "Expert Painting & Decorating in Staffordshire",
//     generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} ${playfair.variable} font-sans bg-off-white text-royal-blue`}>
//         {children}
//       </body>
//     </html>
//   )
// }



// import './globals.css'

import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Navbar from '../components/Navbar'
import { ConsentManager } from '../components/ConsentManager'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Monarch Painters | Elevate Your Space with Timeless Elegance",
  description: "Expert Painting & Decorating in Staffordshire",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-off-white text-royal-blue`}>
        <ConsentManager privacyPolicyUrl="/privacy">
          <Navbar />
          {children}
        </ConsentManager>
      </body>
    </html>
  )
}

