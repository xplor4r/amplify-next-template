"use client"


import { Button } from "@/components/ui/button"


const chips = ["Save more", "Investment portfolio", "Reduce expenses", "Increase income", "Goal progress"]


interface QuickAccessChipsProps {
 onChipClick: (chip: string) => void
}


export function QuickAccessChips({ onChipClick }: QuickAccessChipsProps) {
 return (
   <div className="flex flex-wrap gap-2">
     {chips.map((chip) => (
       <Button key={chip} variant="secondary" size="sm" onClick={() => onChipClick(chip)}>
         {chip}
       </Button>
     ))}
   </div>
 )
}





