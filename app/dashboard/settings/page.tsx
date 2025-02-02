import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LayoutHeader from "@/components/layout/header";
import { InfoIcon } from "lucide-react";

const title = 'Wealthy AI - Settings';
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
          <LayoutHeader title="Settings" />
          <div className="w-full overflow-x-auto p-4 pt-3">
        
          
          <div className="flex flex-col gap-2 items-start">
              <h2 className="font-bold text-2xl mb-4">Your user details</h2>
             
              <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
              Your saved user data
          </div>
              <pre className="text-xs font-mono p-3 rounded border max-h-54 overflow-auto">
              {JSON.stringify(user, null, 2)}
              </pre>
          </div>
          <div>
             </div>
          </div>
        </>
    )
}