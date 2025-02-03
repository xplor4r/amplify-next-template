

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import LayoutHeader from "@/components/layout/header";
import Summary from "./summary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/Overview"
import { RecentTransactions } from "@/components/RecentTransactions"
import { Recommendations } from "@/components/Recommendations"
import { OverviewContextProvider } from '@/components/context/overview-provider';



const title = 'Wealthy AI - Overview';
const description  = 'Your AI finance advisor'

export const metadata = {
    title,
    description
}


export default async function Page() {

    const supabase = await createClient();
    const {
        data: { user },
      } = await supabase.auth.getUser();
    //   console.log('user >>>', user);
    
    if (!user) {
    return redirect('/sign-in');
    }

    return (
        <>
            <LayoutHeader title="Overview" />
            <OverviewContextProvider>
            <div className="w-full overflow-x-auto p-4 pt-3">
                    <Summary />
           

                  

            <div className="space-y-4">
                <div className="flex justify-around">
                 <h1 className="text-3xl font-bold">This month overview</h1>
                 <h1 className="text-2xl font-semibold"> January 2025</h1>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">$12,345</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">$5,000</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">$3,500</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">30%</div>
                    </CardContent>
                </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                    <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                    <Overview />
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <RecentTransactions />
                    </CardContent>
                </Card>
                </div>
                <Recommendations />
            </div>
            </div>
            </OverviewContextProvider>

        </>
    )
}