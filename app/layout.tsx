import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Shawn Hicks - Mechanical Engineering and Artificial Intelligence",
  description: "Mechanical Engineering + AI student portfolio showcasing projects in aerospace, automotive, and machine learning.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}