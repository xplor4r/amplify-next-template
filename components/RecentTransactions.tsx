import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const transactions = [
 {
   id: "1",
   name: "Grocery Store",
   amount: -85.5,
   date: "2023-04-01",
   avatar: "/placeholder.svg?height=32&width=32",
 },
 {
   id: "2",
   name: "Salary Deposit",
   amount: 2500.0,
   date: "2023-03-31",
   avatar: "/placeholder.svg?height=32&width=32",
 },
 {
   id: "3",
   name: "Electric Bill",
   amount: -120.0,
   date: "2023-03-28",
   avatar: "/placeholder.svg?height=32&width=32",
 },
 {
   id: "4",
   name: "Online Shopping",
   amount: -65.99,
   date: "2023-03-25",
   avatar: "/placeholder.svg?height=32&width=32",
 },
]


export function RecentTransactions() {
 return (
   <div className="space-y-8">
     {transactions.map((transaction) => (
       <div key={transaction.id} className="flex items-center">
         <Avatar className="h-9 w-9">
           <AvatarImage src={transaction.avatar} alt="Avatar" />
           <AvatarFallback>{transaction.name[0]}</AvatarFallback>
         </Avatar>
         <div className="ml-4 space-y-1">
           <p className="text-sm font-medium leading-none">{transaction.name}</p>
           <p className="text-sm text-muted-foreground">{new Date(transaction.date).toLocaleDateString()}</p>
         </div>
         <div className={`ml-auto font-medium ${transaction.amount < 0 ? "text-red-500" : "text-green-500"}`}>
           {transaction.amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}
         </div>
       </div>
     ))}
   </div>
 )
}
