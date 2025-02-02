"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 


export type ExpenseSummaryProps = {
    id: string
    name: string
    price: string;
    date: string
    category: string
    notes: string
    paid_via: string;
    // status: "pending" | "processing" | "success" | "failed"
    // email: string
  }
   
  export const columns: ColumnDef<ExpenseSummaryProps>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
        accessorKey: "paid_via",
        header: "Paid Via",
    },
    {
        accessorKey: "notes",
        header: "Notes"
    }, 
    {
        accessorKey: "date",
        header: "Spent Date."
    }
  ]
  