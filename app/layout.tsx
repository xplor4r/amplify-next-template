import './globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-background text-foreground antialiased' suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}