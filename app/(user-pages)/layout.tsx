import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/context/theme-provider';


const inter = Inter({ subsets: ['latin'] });

const title = 'Wealthy AI - Overview'
const description = 'Smart Personal Finance Manager'

export const metadata = {
    title,
    description
}

export default async function DashboardLayout({children}: any) {
    <>
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} flex h-full flex-col text-gray-600 antiliased`}>
                 <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                 <main className="relative flex min-h-full min-w-full bg-background">

                            <h1 className="text-4xl"> This is dashboard</h1>

                    </main>
                </ThemeProvider>
            </body>
        </html>
    </>
}