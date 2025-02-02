import DashboardLayout from '@/components/layout'

export default async function Layout({ children}: any) {
    // get supbase user

    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <body className={`test-class flex h-full flex-col text-gray-600 antiliased`}>
                    <main >
                        <DashboardLayout>
                            <h1> This IS DASHBOARd</h1>
                            <div className='bg-red'>
                                  {children}
                            </div>
                         </DashboardLayout>
                    </main>
                </body>
            </html>
        </>
    )
}

