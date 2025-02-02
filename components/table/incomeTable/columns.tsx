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



export type IncomeSummaryProps = {
    id: string
    name: string
    amount: number
    date: string
    category: string
    notes: string
    // status: "pending" | "processing" | "success" | "failed"
    // email: string
  }
   
  export const columns: ColumnDef<IncomeSummaryProps>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "amount",
      header: "Amount",
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
        header: "Received Date"
    }
  ]
  
  