"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }
 
// export const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "status",
//     header: "Status",
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//   },
//   {
//     accessorKey: "amount",
//     header: "Amount",
//   },
// ]



export type InvestmentsSummaryProps = {
    id: string
    name: string
    price: string
    date: string
    category: string
    notes: string
    units: number
    created_at: string
    updated_at: string
    // status: "pending" | "processing" | "success" | "failed"
    // email: string
  }
   
  export const columns: ColumnDef<InvestmentsSummaryProps>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "units",
      header: "Units",
    },
    {
      accessorKey: "price",
      header: "Single Stock Price",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
        accessorKey: "notes",
        header: "Notes"
    }, 
    {
        accessorKey: "date",
        header: "Bought Date"
    }
  ]
  
  