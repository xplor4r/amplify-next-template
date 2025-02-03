"use client"


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"


type ItemType = "income" | "expense" | "investment" | "goal"


interface AddItemModalProps {
 isOpen: boolean
 onClose: () => void
 itemType: ItemType
}


export function AddItemModal({ isOpen, onClose, itemType }: AddItemModalProps) {
 const [formData, setFormData] = useState({
   name: "",
   amount: "",
   date: "",
   category: "",
   description: "",
 })


 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   const { name, value } = e.target
   setFormData((prev) => ({ ...prev, [name]: value }))
 }


 const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault()
   // Here you would typically send the data to your backend
   console.log(`Adding ${itemType}:`, formData)
   onClose()
 }

 
 const handleIncomeSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // call api for income data 

    onClose();
 }


 if (!isOpen) return null


 return (
   <div className="fixed inset-0 bg-black  bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
     <div className="bg-white dark:bg-black border-amber-50  rounded-lg p-6 w-full max-w-md">
       <div className="flex justify-between items-center mb-4">
         <h2 className="text-xl font-bold">Add {itemType}</h2>
         <Button variant="ghost" size="icon" onClick={onClose}>
           <X className="h-4 w-4" />
         </Button>
       </div>

        {
            itemType === 'income' && (
              <form onSubmit={handleSubmit} className="border-amber-50 border-1">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      name="amount"
                      type="number"
                      value={formData.amount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" name="date" type="date" value={formData.date} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" name="category" value={formData.category} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" name="description" value={formData.description} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                  <Button type="button" variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit">Add {itemType}</Button>
                </div>
              </form>
            )
        }


       <form onSubmit={handleSubmit} className="border-amber-50 border-1">
         <div className="space-y-4">
           <div>
             <Label htmlFor="name">Name</Label>
             <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
           </div>
           <div>
             <Label htmlFor="amount">Amount</Label>
             <Input
               id="amount"
               name="amount"
               type="number"
               value={formData.amount}
               onChange={handleInputChange}
               required
             />
           </div>
           <div>
             <Label htmlFor="date">Date</Label>
             <Input id="date" name="date" type="date" value={formData.date} onChange={handleInputChange} required />
           </div>
           <div>
             <Label htmlFor="category">Category</Label>
             <Input id="category" name="category" value={formData.category} onChange={handleInputChange} required />
           </div>
           <div>
             <Label htmlFor="description">Description</Label>
             <Textarea id="description" name="description" value={formData.description} onChange={handleInputChange} />
           </div>
         </div>
         <div className="mt-6 flex justify-end space-x-4">
           <Button type="button" variant="outline" onClick={onClose}>
             Cancel
           </Button>
           <Button type="submit">Add {itemType}</Button>
         </div>
       </form>
     </div>
   </div>
 )
}




