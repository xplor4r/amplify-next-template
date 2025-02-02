import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LayoutHeader from "@/components/layout/header";
import InvestmentsSummary from "./summary";
import { InvestmentsSummaryProps, columns } from "@/components/table/investmentsTable/columns";
import { DataTable } from "@/components/table/data-table";

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
      
      const incomeSummaryData: InvestmentsSummaryProps[] = [
        {
          id: "728ed52f",
          price: "1000",
          name: "HDFC Bank",
          category: "Stationery",
          notes: "Need to write a story",
          date: "24/2/2024",
          created_at: '24/2/2024',
          updated_at: '24/2/2024',
          units: 3
        },
        // ...
      ]

    return (
        <>
              <LayoutHeader title="Investments" />
              <div className="w-full overflow-x-auto p-4 pt-3">
               <InvestmentsSummary />
               <DataTable columns={columns as InvestmentsSummaryProps[]} data={incomeSummaryData} /> 
           </div>
        </>
    )
}