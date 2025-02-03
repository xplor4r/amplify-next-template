'use client'

import { ExpenseSummaryProps, columns } from "@/components/table/expenseTable/columns";
import { DataTable } from "@/components/table/data-table";

import useSWR from 'swr'
import { getExpenses } from "@/services/expense";

export default function ExpenseTable () {

    const { data, isLoading } = useSWR('fetchExpenses', getExpenses)

    console.log('expense table data', data);

    if (data) {
        const expenseSummaryData: ExpenseSummaryProps[] = data;
        return (
            <DataTable columns={columns as ExpenseSummaryProps[]} data={expenseSummaryData} loading={isLoading}/>
        )
    }
}