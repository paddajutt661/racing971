import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head><meta name="theme-color" content="#531685" /><link rel="icon" href="/logo.svg" /></Head>
      <body className="bg-play-black text-white"><Main /><NextScript /></body>
    </Html>
  )
}
