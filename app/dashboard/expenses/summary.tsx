'use client'

import SummaryCard from '@/components/cards/summary-card';
import { getExpenses } from '@/services/expense';
import { useEffect } from 'react';
// import { formatCurrency } from '@/lib/formatter';
import { formatTotalPriceCurrency } from '@/lib/formatter';
import useSWR from 'swr'
import CardLoader from '@/components/loader/card';

export default function ExpenseSummary () {

	const { data, isLoading = true } = useSWR('fetchExpenses', getExpenses);
	console.log('data expenseses', data);


	{isLoading && (
		<CardLoader cards={2} className="mb-6" />
	)}

	if (data) {
		return (
			<>
					<h2 className="mb-4 font-semibold text-primary dark:text-white">Summary</h2>
	
				
					<div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
						<SummaryCard title="total expenses"  data={data.length || 2}/>
						<SummaryCard title="total amount" data={40000} />
						{/* <SummaryCard
							title="total amount"
							data={formatCurrency({
								value: data.reduce((acc: any, datum: any) => Number(datum.price) + acc, 0),
								currency: user?.currency,
								locale: user?.locale,
							})}
						/> */}
						{/* <SummaryCard title="top spent category" data={formatCurrency({ value: 1 })} /> */}
					</div>
			</>
		)
	}	
    
}