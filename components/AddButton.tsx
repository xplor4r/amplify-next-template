
"use client"


import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PlusIcon } from "lucide-react"
import { useHotkeys } from "react-hotkeys-hook"
// import { AddItemModal } from "./AddItemModal"
import { AddIncomeModal } from "./AddModals/AddIncomeModal"
import { AddExpenseModal } from "./AddModals/AddExpenseModal"
import { AddInvestmentsModal } from "./AddModals/AddInvestmentModal"
import { AddSubscriptionsModal } from "./AddModals/AddSubscriptionsModal"

import { Tooltip, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip';

import shortcuts from "@/constants/shortcuts"


const openShortCutKey = Object.values(shortcuts.modal.open.shortcut);

const options = {
    keyup: true
}

type ItemType = "income" | "expense" | "investment" | "goal"

export function AddButton() {
 const [open, setOpen] = useState(false)
 const [modalOpen, setModalOpen] = useState(false);
 const [itemType, setItemType] = useState<ItemType>("income");
 const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);
 const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
 const [isInvestmentModalOpen, setIsInvestmentModalOpen] = useState(false);
 const [isSubscriptionsModalOpen, setIsSubscriptionsModalOpen] = useState(false);

 useHotkeys(openShortCutKey, () => setOpen(true), options);


 const handleAdd = (type: ItemType) => {
   // Here you would typically open a modal or navigate to a form
//    console.log(`Add ${type}`)

   setItemType(type);
    setModalOpen(true)
   setOpen(false)
 }

 const handleAddIncome = () => {
    setIsIncomeModalOpen(true);
    setOpen(false);
 }

 const handleAddExpense = () => {
    setIsExpenseModalOpen(true);
    setOpen(false);
 }

 const handleAddInvestment = () => {
    setIsInvestmentModalOpen(true);
    setOpen(false);
 }

 const handleAddSubscriptions = () => {
    setIsSubscriptionsModalOpen(true);
    setOpen(false);
 }

 return (
    <>
    <Tooltip>
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <TooltipTrigger>
            <DropdownMenuTrigger asChild>
         
            <Button variant="default" size="icon">
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Add item</span>
            </Button>
           
            </DropdownMenuTrigger>
            </TooltipTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleAddIncome}>Add Income</DropdownMenuItem>
                <DropdownMenuItem onClick={handleAddExpense}>Add Expense</DropdownMenuItem>
                <DropdownMenuItem onClick={handleAddInvestment}>Add Investment</DropdownMenuItem>
                <DropdownMenuItem onClick={handleAddSubscriptions}>Add Subscriptions</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleAdd("goal")}>Add Goal</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    
            <TooltipContent className="mb-1 mr-1" hideWhenDetached side="left">
                    {shortcuts.modal.open.text}
                    <kbd className="bordar-gray ml-[6px] inline-flex h-[19px] w-[19px] items-center justify-center rounded-[4px] border-[1px] border-gray-400 text-xs font-semibold uppercase">
                    {shortcuts.modal.open.shortcut}
                    </kbd>
            </TooltipContent>
    </Tooltip>
       {
        isIncomeModalOpen ? (
            <AddIncomeModal isOpen={isIncomeModalOpen} onClose={() => setIsIncomeModalOpen(false)} />
        ) : null
       }

        {
            isExpenseModalOpen ? (
              <AddExpenseModal isOpen={isExpenseModalOpen} onClose={() => setIsExpenseModalOpen(false)} />
            ) : null
        }

        {
            isInvestmentModalOpen ? (
                <AddInvestmentsModal isOpen={isInvestmentModalOpen} onClose={() => setIsInvestmentModalOpen(false)} />
            ): null
        }

        {
            isSubscriptionsModalOpen ? (
                <AddSubscriptionsModal isOpen={isSubscriptionsModalOpen} onClose={() => setIsSubscriptionsModalOpen(false)} />
            ): null
        }

        {/* <AddItemModal isOpen={modalOpen} onClose={() => setModalOpen(false)} itemType={itemType} /> */}
    </>
 )
}
