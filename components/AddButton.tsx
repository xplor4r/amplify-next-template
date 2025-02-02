
"use client"


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus } from "lucide-react"


export function AddButton() {
 const [open, setOpen] = useState(false)


 const handleAdd = (type: string) => {
   // Here you would typically open a modal or navigate to a form
   console.log(`Add ${type}`)
   setOpen(false)
 }


 return (
   <DropdownMenu open={open} onOpenChange={setOpen}>
     <DropdownMenuTrigger asChild>
       <Button variant="default" size="icon">
         <Plus className="h-4 w-4" />
         <span className="sr-only">Add item</span>
       </Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent align="end">
       <DropdownMenuItem onClick={() => handleAdd("Income")}>Add Income</DropdownMenuItem>
       <DropdownMenuItem onClick={() => handleAdd("Expense")}>Add Expense</DropdownMenuItem>
       <DropdownMenuItem onClick={() => handleAdd("Investment")}>Add Investment</DropdownMenuItem>
       <DropdownMenuItem onClick={() => handleAdd("Goal")}>Add Goal</DropdownMenuItem>
     </DropdownMenuContent>
   </DropdownMenu>
 )
}
