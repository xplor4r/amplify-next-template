'use client';

import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '../context/theme-provider';
export default function Layout({ children }: { children: any }) {
	return (
		 <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
			<TooltipProvider delayDuration={500}>
				{children}
		</TooltipProvider>
		</ThemeProvider>)
}
