'use client'

import { InvestmentsSummaryProps, columns } from "@/components/table/investmentsTable/columns";
import { DataTable } from "@/components/table/data-table";

import useSWR from 'swr'
import { getInvestments } from "@/services/investments";

export default function InvestmentsTable () {

    const { data, isLoading } = useSWR('fetchInvestments', getInvestments)

    console.log('income table data', data);

    if (data) {
        const investmentsSummaryData: InvestmentsSummaryProps[] = data;
        return (
            <DataTable columns={columns as InvestmentsSummaryProps[]} data={investmentsSummaryData} loading={isLoading}/>
        )
    }
}