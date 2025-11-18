import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Método Misión de Vida - Evento Presencial | Ordena Tu Propósito, Mensaje y Negocio con Dios en el Centro',
  description: 'Un día intensivo para ordenar tu propósito, tu mensaje y tu negocio mediante la estructura del Método Misión de Vida, colocando a Dios como la fuente de todo. Rionegro - 14 de Diciembre.',
  keywords: 'método misión de vida, mmv, propósito, negocio espiritual, coaches, mentores, emprendedores espirituales, alejandro jaramillo',
  openGraph: {
    title: 'Método Misión de Vida - Evento Presencial',
    description: 'Ordena tu propósito, tu mensaje y tu negocio con Dios en el centro.',
    type: 'website',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
