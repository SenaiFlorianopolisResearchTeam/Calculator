import './styles/globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Iniciação Científica',
  description: 'Calculadora de Acústica',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        {/* <img src='./elipse.svg' className="elipse1"></img> */}
        {/* <img src='./elipse.svg' className="elipse2"></img> */}
      </body>
    </html>
  )
}
