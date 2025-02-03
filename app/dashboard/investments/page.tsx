import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LayoutHeader from "@/components/layout/header";
import InvestmentsSummary from "./summary";
import InvestmentsTable from "./investments-table"; 

const title = 'Wealthy AI - Manage Investments';
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
              <LayoutHeader title="Investments" />
              <div className="w-full overflow-x-auto p-4 pt-3">
               <InvestmentsSummary />
               <InvestmentsTable />
           </div>
        </>
    )
}