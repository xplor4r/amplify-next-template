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



export type SubscriptionsSummaryProps = {
    id: string
    name: string
    price: string
    date: string
    cancelled_at: string
    paid_dates: any[]
    prev_renewal_date: string
    renewal_date: string
    paid: string
    url: string
    active: boolean
    notify: string
    notes: string
    // status: "pending" | "processing" | "success" | "failed"
    // email: string
  }
   
  export const columns: ColumnDef<SubscriptionsSummaryProps>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
    {
        accessorKey: "renewal_date",
        header: "Renewal Date",
    },
    {
        accessorKey: "date",
        header: "Start / Cancel Date"
    },
    {
        accessorKey: "active",
        header: "Status",
    },
    {
        accessorKey: "notify",
        header: "Notify",
    },
    {
        accessorKey: "notes",
        header: "Notes"
    }, 
    {
        accessorKey: "url",
        header: "URL"
    },
    {
        accessorKey: "prev_renewal_date",
        header: "Previous Renewal Date"
    }
  ]
  
  