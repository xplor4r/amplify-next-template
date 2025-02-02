import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LayoutHeader from "@/components/layout/header";
import SubscriptionsSummary from "./summary";
import { SubscriptionsSummaryProps, columns } from "@/components/table/subscriptionsTable/columns";
import { DataTable } from "@/components/table/data-table";

const title = 'Wealthy AI - Manage Subscriptions';
const description  = 'Your AI companion to help you make smart financial decisions'

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

      const subscriptionsSummaryData: SubscriptionsSummaryProps[] = [
        {
          id: "728ed52f",
          name: "Netflix",
          price: "499",
          date: "1/02/2024",
          category: "Entertainment",
          cancelled_at: "3/6/2024",
          paid_dates: ["200"],
          prev_renewal_date: "4/5/2025",
          renewal_date: "4/5/2026",
          paid: "499",
          url: "https://netflix.com",
          active: true,
          notify: "4/2/2025",
          notes: "I Use netflix for watching shows"
        }
      ]
      
    return (
        <>
              <LayoutHeader title="Subscriptions" />
              <div className="w-full overflow-x-auto p-4 pt-3">
                <SubscriptionsSummary />
                <DataTable columns={columns as SubscriptionsSummaryProps[]} data={subscriptionsSummaryData} /> 
              </div>
        </>
    )
}