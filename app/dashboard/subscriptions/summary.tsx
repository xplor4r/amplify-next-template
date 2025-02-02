'use client'

import SummaryCard from '@/components/cards/summary-card';

// import { formatCurrency } from '@/lib/formatter';


export default function SubscriptionsSummary () {

    return (
        <>
            	<h2 className="mb-4 font-semibold text-primary dark:text-white">Summary</h2>

                <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
					<SummaryCard title="total subscriptions" data={4} />
                    <SummaryCard title="Active - Cancelled" data={'3 - 1'} />
					<SummaryCard title="Total Active - Monthly" data={2} />
                    <SummaryCard title="Total Active - Yearly" data={1} />
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