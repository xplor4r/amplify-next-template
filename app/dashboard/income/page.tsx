import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LayoutHeader from "@/components/layout/header";
import IncomeSummary from "./summary";
import { IncomeSummaryProps, columns } from "@/components/table/incomeTable/columns";
import { DataTable } from "@/components/table/data-table";

const title = 'Wealthy AI - Manage Income';
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
      
    const incomeSummaryData: IncomeSummaryProps[] = [
        {
          id: "728ed52f",
          amount: 1000,
          name: "Bought Pencil",
          category: "Stationery",
          notes: "Need to write a story",
          date: "24/2/2024"
        },
        // ...
      ]

    return (
        <>
           <LayoutHeader title="Income" />
           <div className="w-full overflow-x-auto p-4 pt-3">
               <IncomeSummary />
               <DataTable columns={columns as IncomeSummaryProps[]} data={incomeSummaryData} />
           </div>
        </>
    )
}