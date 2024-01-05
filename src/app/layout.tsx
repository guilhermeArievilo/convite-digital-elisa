import type { Metadata } from 'next'
import { Rye } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import IntroductionAnimation from '@/components/introduction'

const rye = Rye({ weight:'400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Convite para o Circo Mágico da Elisa',
  description: 'Convite de aniversário de 1 ano de Elisa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rye.className}>
        <IntroductionAnimation />
        <Header />
        {children}</body>
    </html>
  )
}
