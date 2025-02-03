import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LayoutHeader from "@/components/layout/header";

const title = 'Wealthy AI - Manage Goals';
const description  = 'Your AI finance advisor'

export const metadata = {
    title,
    description
}


// Mock data for financial goals
const goals = [
 {
   id: 1,
   name: "Emergency Fund",
   target: 10000,
   current: 5000,
   deadline: "2023-12-31",
 },
 {
   id: 2,
   name: "Down Payment for House",
   target: 50000,
   current: 15000,
   deadline: "2025-06-30",
 },
 {
   id: 3,
   name: "Retirement Savings",
   target: 500000,
   current: 100000,
   deadline: "2045-01-01",
 },
 {
   id: 4,
   name: "Vacation Fund",
   target: 5000,
   current: 2500,
   deadline: "2023-08-31",
 },
]


export default async function GoalsPage() {

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
    <LayoutHeader title="Goals" />
            <div className="w-full overflow-x-auto p-4 pt-3">
                <div className="space-y-6">
            <h1 className="text-3xl font-bold">Financial Goals</h1>
            <div className="grid gap-6 md:grid-cols-2">
            {goals.map((goal) => (
                <Card key={goal.id}>
                <CardHeader>
                    <CardTitle>{goal.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                    <Progress value={(goal.current / goal.target) * 100} />
                    <div className="flex justify-between text-sm">
                        <span>
                        ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                        </span>
                        <span>{((goal.current / goal.target) * 100).toFixed(1)}%</span>
                    </div>
                    <p className="text-sm text-gray-500">Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
                    </div>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
   </div>
   </>
 )
}
