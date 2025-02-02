import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LayoutHeader from "@/components/layout/header";
import ExpenseSummary from './summary';
import { ExpenseSummaryProps, columns } from "@/components/table/expenseTable/columns";
import { DataTable } from "@/components/table/data-table";

const title = 'Wealthy AI - Manage Expenses';
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
      
      const expenseSummaryData: ExpenseSummaryProps[] = [
        {
          id: "728ed52f",
          price: "1000",
          name: "Bought Pencil",
          category: "Stationery",
          notes: "Need to write a story",
          paid_via: "Paytm",
          date: "24/2/2024"
        },
        // ...
      ]

    return (
        <>
                <LayoutHeader title="Expenses" />
                <div className="w-full overflow-x-auto p-4 pt-3">
                  <ExpenseSummary />
                  <DataTable columns={columns as ExpenseSummaryProps[]} data={expenseSummaryData} />
               </div>
        </>
    )
}