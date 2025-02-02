

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";

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
            <div>
                <h2 className="text-yellow-300"> Test </h2>
            </div>
            <div className="flex-1 w-full flex flex-col gap-12">
            <div className="w-full">
                <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
                <InfoIcon size="16" strokeWidth={2} />
                This is a protected page that you can only see as an authenticated
                user
                </div>
            </div>
            <div className="flex flex-col gap-2 items-start">
                <h2 className="font-bold text-2xl mb-4">Your user details</h2>
                <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
                {JSON.stringify(user, null, 2)}
                </pre>
            </div>
                {/* <Authenticator>           */}
            
                <div>
                🥳 App successfully hosted. 
                <br />
                <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
                    Review next steps of this tutorial.
                </a>
                </div>
            {/* <div>
                <h2 className="font-bold text-2xl mb-4">Next steps</h2>
                <FetchDataSteps />
            </div> */}
            </div>
        </>
    )
}