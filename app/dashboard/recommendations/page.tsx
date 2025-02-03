import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LayoutHeader from "@/components/layout/header";


const title = 'Wealthy AI - Recommendations';
const description  = 'Your AI finance advisor'

export const metadata = {
    title,
    description
}


// Mock data for AI recommendations
const recommendations = [
 {
   id: 1,
   date: "2023-04-15",
   recommendation: "Increase emergency fund savings by 2% of monthly income",
   impact: "positive",
   goal: "Build emergency fund",
 },
 {
   id: 2,
   date: "2023-04-10",
   recommendation: "Reduce dining out expenses by $100 this month",
   impact: "positive",
   goal: "Reduce monthly expenses",
 },
 {
   id: 3,
   date: "2023-04-05",
   recommendation: "Invest an additional $200 in index funds",
   impact: "positive",
   goal: "Grow retirement savings",
 },
 {
   id: 4,
   date: "2023-03-28",
   recommendation: "Cancel unused streaming service subscription",
   impact: "positive",
   goal: "Reduce monthly expenses",
 },
 {
   id: 5,
   date: "2023-03-20",
   recommendation: "Postpone purchase of new gadget",
   impact: "neutral",
   goal: "Reduce unnecessary spending",
 },
]


export default async function AIRecommendationsPage() {

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
       <LayoutHeader title="AI Recommendations" />
       <div className="w-[800px] overflow-x-auto p-4 pt-3">

   <div className="space-y-6">
     <h1 className="text-3xl font-bold">AI Recommendations Log</h1>
     <Card>
       <CardHeader>
         <CardTitle>Recent Recommendations</CardTitle>
       </CardHeader>
       <CardContent>
         <ul className="space-y-4">
           {recommendations.map((rec) => (
             <li key={rec.id} className="border-b pb-4 last:border-b-0 last:pb-0">
               <div className="flex justify-between items-start">
                 <div>
                   <p className="font-medium">{rec.recommendation}</p>
                   <p className="text-sm text-gray-500">Goal: {rec.goal}</p>
                 </div>
                 <Badge variant={rec.impact === "positive" ? "default" : "secondary"} className="ml-2">
                   {rec.impact}
                 </Badge>
               </div>
               <p className="text-sm text-gray-500 mt-1">{rec.date}</p>
             </li>
           ))}
         </ul>
       </CardContent>
     </Card>
   </div>
   </div>
   </>
 )
}
