import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LayoutHeader from "@/components/layout/header";

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
        </>
    )
}