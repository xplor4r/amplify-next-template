import { Inter } from "next/font/google";
// import "./app.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

import { ThemeProvider } from "next-themes";

const defaultUrl = process.env.NEXT_PUBLIC_PROJECT_URL
  ? `${process.env.NEXT_PUBLIC_PROJECT_URL}`
  : "http://localhost:3000";

const title =  "Wealthy AI"
const description =  "AI-powered Wealth Management with smart Insights"

const websiteURL = new URL(defaultUrl);

export const metadata = {
  metadataBase: websiteURL,
  title,
  description,
  manifest: `${websiteURL}/manifest.json`,
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		creator: '@xplor4r',
		images: [`${websiteURL}/og.jpg`],
	},
	openGraph: {
		title,
		description,
		url: websiteURL,
		type: 'website',
		images: [`${websiteURL}/og.jpg`],
	},
	icons: {
		icon: `${websiteURL}/icons/icon.svg`,
		shortcut: `${websiteURL}/favicon.ico`,
		apple: `${websiteURL}/icons/apple-icon.png`,
	},
	appleWebApp: {
		title,
		statusBarStyle: 'black',
		startupImage: [`${websiteURL}/icons/apple-icon.png`],
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" href="/favicons/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-background text-foreground text-gray-600 antialised w-full container-fluid`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
            disableTransitionOnChange
          >
          <div className="selection:bg-[hsl(320,65%, 52%, 20%)]">
              <NavBar />
              {children}
              <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

