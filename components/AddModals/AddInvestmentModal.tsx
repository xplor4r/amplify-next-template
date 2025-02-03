"use client"


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"
import { dateFormat } from "@/constants/date"
import {format} from 'date-fns';
import { addInvestment } from '@/services/investments';
import { useAuth } from "../context/auth-provider"
import { InvestmentsData } from "@/services/investments"

interface AddItemModalProps {
 isOpen: boolean
 onClose: () => void
}

export function AddInvestmentsModal({ isOpen, onClose }: AddItemModalProps) {
 const [loading, setLoading] = useState(false);
 const { userId } = useAuth();
 
 const todayDate = format(new Date(), dateFormat);
const initialState: InvestmentsData = {
    name: "",
    notes: "",
    date: todayDate,
    units: "",
    category: "",
    price: "0",
    paid_via: "cash",
    user_id: userId,
  };
 const [formData, setFormData] = useState(initialState)
 

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   const { name, value } = e.target
   setFormData((prev) => ({ ...prev, [name]: value }))
 }

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault()
   // Here you would typically send the data to your backend
    try {
        setLoading(true);
        // console.log('sending formData', formData);

        
        await addInvestment(formData).then((resp) => {

            // console.log('resp for add expense', resp);

            setLoading(false);
            // show toast
            
        });
        
    } catch {
        setLoading(false);
        // show error toast

    } finally {
        setLoading(false);
        setFormData({ ...initialState});
    }

  //  console.log('formData', formData);

   onClose()
 }



 if (!isOpen) return null


 return (
   <div className="fixed inset-0 bg-black  bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
     <div className="bg-white dark:bg-black border-amber-50  rounded-lg p-6 w-full max-w-md">
       <div className="flex justify-between items-center mb-4">
         <h2 className="text-xl font-bold">Add Investment</h2>
         <Button variant="ghost" size="icon" onClick={onClose}>
           <X className="h-4 w-4" />
         </Button>
       </div>
              <form onSubmit={handleSubmit} className="border-amber-50 border-1">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Invested in</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required  placeholder="eg. HDFC Stocks "/>
                  </div>
                  <div>
                    <Label htmlFor="price">Price (in Rs.)</Label>
                    <Input
                      id="price"
                      name="price"
                      type="string"
                      value={formData.price || "0"}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="units">Units</Label>
                    <Input id="units" name="units" value={formData.units} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="date">Investment Date</Label>
                    <Input id="date" name="date" type="date" value={formData.date} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" name="category" value={formData.category} onChange={handleInputChange} required placeholder="eg. Salary" />
                  </div>
                  <div>
                    <Label htmlFor="paidVia">Paid via</Label>
                    <Input id="paidVia" name="paid_via" value={formData.paid_via} onChange={handleInputChange} required placeholder="eg. Salary" />
                  </div>
                  <div>
                    <Label htmlFor="description">Notes</Label>
                    <Textarea id="notes" name="notes" value={formData.notes} onChange={handleInputChange} placeholder="optional notes" />
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                  <Button type="button" variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit">Add Investment</Button>
                </div>
              </form>
          
     </div>
   </div>
 )
}




