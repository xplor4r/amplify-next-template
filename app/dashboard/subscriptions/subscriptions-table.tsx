'use client'

import { SubscriptionsSummaryProps, columns } from "@/components/table/subscriptionsTable/columns";
import { DataTable } from "@/components/table/data-table";

import useSWR from 'swr'
import { getSubscriptions } from "@/services/subscriptions";

export default function SubscriptionsTable () {

    const { data, isLoading } = useSWR('fetchSubscriptions', getSubscriptions)

    console.log('subscriptions table data', data);

    // const subscriptionsSummaryData: SubscriptionsSummaryProps[] = [
      //   {
      //     id: "728ed52f",
      //     name: "Netflix",
      //     price: "499",
      //     date: "1/02/2024",
      //     category: "Entertainment",
      //     cancelled_at: "3/6/2024",
      //     paid_dates: ["200"],
      //     prev_renewal_date: "4/5/2025",
      //     renewal_date: "4/5/2026",
      //     paid: "499",
      //     url: "https://netflix.com",
      //     active: true,
      //     notify: "4/2/2025",
      //     notes: "I Use netflix for watching shows"
      //   }
      // ]

    if (data) {
        const subscriptionsSummaryData: SubscriptionsSummaryProps[] = data;
        return (
            <DataTable columns={columns as SubscriptionsSummaryProps[]} data={subscriptionsSummaryData} loading={isLoading}/>
        )
    }
}