'use client'

import { IncomeSummaryProps, columns } from "@/components/table/incomeTable/columns";
import { DataTable } from "@/components/table/data-table";

import useSWR from 'swr'
import { getIncome } from "@/services/income";

export default function IncomeTable () {

    const { data, isLoading } = useSWR('fetchIncome', getIncome)

    // console.log('income table data', data);

    if (data) {
        const incomeSummaryData: IncomeSummaryProps[] = data;
        return (
            <DataTable columns={columns as IncomeSummaryProps[]} data={incomeSummaryData} loading={isLoading}/>
        )
    }
}