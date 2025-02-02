

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import LayoutHeader from "@/components/layout/header";
import Summary from "./summary";


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
            <div className="w-full overflow-x-auto p-4 pt-3">
                    <Summary />
            </div>

            <div className="flex-1 w-full flex flex-col gap-12">
           
            {/* <div>
                <h2 className="font-bold text-2xl mb-4">Next steps</h2>
                <FetchDataSteps />
            </div> */}
            </div>
        </>
    )
}