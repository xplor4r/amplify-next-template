import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


const recommendations = [
 {
   title: "Increase Your Savings",
   description: "Try to save an additional 5% of your income each month.",
   action: "Set up automatic transfers",
 },
 {
   title: "Review Subscriptions",
   description: "You could save $50/month by cancelling unused subscriptions.",
   action: "Review subscriptions",
 },
 {
   title: "Invest in Index Funds",
   description: "Consider investing in low-cost index funds for long-term growth.",
   action: "Learn more",
 },
]


export function Recommendations() {
 return (
   <Card>
     <CardHeader>
       <CardTitle>Financial Recommendations</CardTitle>
       <CardDescription>Here are some tips to improve your financial health</CardDescription>
     </CardHeader>
     <CardContent>
       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
         {recommendations.map((rec, index) => (
           <Card key={index}>
             <CardHeader>
               <CardTitle>{rec.title}</CardTitle>
               <CardDescription>{rec.description}</CardDescription>
             </CardHeader>
             <CardContent>
               <Button>{rec.action}</Button>
             </CardContent>
           </Card>
         ))}
       </div>
     </CardContent>
   </Card>
 )
}

export default Recommendations;




