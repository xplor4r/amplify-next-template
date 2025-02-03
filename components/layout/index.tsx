'use client';

import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '../context/theme-provider';
import { createClient } from '@/utils/supabase/client'
import { AuthProvider } from '../context/auth-provider';
import { useEffect, useState } from 'react';

export default function Layout({ children }: { children: any }) {

	const supabase = createClient()
	const [loggedInUser, setLoggedInUser] = useState<any>(null);
   
    //   console.log('user cook >>>', user);
	useEffect(() => {
		const getData = async () => {
		  const { data } = await supabase.auth.getUser();
		 console.log('data', data);
		 const user = data.user;
		 setLoggedInUser(user);
		}
		getData()
	  }, [])

	return (
		 <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
			<AuthProvider user={loggedInUser}>
				<TooltipProvider delayDuration={500}>
						{children}
				</TooltipProvider>
			</AuthProvider>
		</ThemeProvider>)
}
