import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LayoutHeader from "@/components/layout/header";
import SubscriptionsSummary from "./summary";
import SubscriptionsTable from "./subscriptions-table";

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
      
    return (
        <>
              <LayoutHeader title="Subscriptions" />
              <div className="w-full overflow-x-auto p-4 pt-3">
                <SubscriptionsSummary />
                <SubscriptionsTable />
              </div>
        </>
    )
}