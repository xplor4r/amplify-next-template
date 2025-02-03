'use client'

import SummaryCard from '@/components/cards/summary-card';
import { getIncome } from '@/services/income';
import CardLoader from '@/components/loader/card';
import { formatTotalAmountCurrency } from '@/lib/formatter';
import useSWR from 'swr'

export default function IncomeSummary () {

	const { data, isLoading = true } = useSWR('fetchIncome', getIncome)

	// const fetchIncomeData = async () => {
	// 	await getIncome().then((resp) => {
	// 		console.log('income resp >>>>', resp);
	// 	});
	// }

	// useEffect(() => {
	// 	fetchIncomeData();
	// }, []);

    return (
        <>
		<h2 className="mb-4 font-semibold text-primary dark:text-white">Summary</h2>
		{isLoading ? (
		<CardLoader cards={2} className="mb-6" />
			) : (
				<div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
					<SummaryCard title="total income" data={data.length} />
					<SummaryCard
						title="total amount"
						data={formatTotalAmountCurrency(data)}
					/>
				</div>
			)}
        </>
    )
}