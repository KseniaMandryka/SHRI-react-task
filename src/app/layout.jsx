import './globals.css'
import { Inter } from 'next/font/google'
import { StoreProvider } from "./redux/StoreProvider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Билетопоиск',
  description: 'Выберите фильмы на главной странице',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
