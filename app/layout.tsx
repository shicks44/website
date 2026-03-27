import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Shawn Hicks | Mechanical Engineering & AI Portfolio",
  description:
    "Portfolio of Shawn Hicks, a Mechanical Engineering and Artificial Intelligence student at Western University focused on design, testing, CAD, and hands-on engineering projects.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-black font-sans antialiased">{children}</body>
    </html>
  )
}