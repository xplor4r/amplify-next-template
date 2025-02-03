'use client'

import SummaryCard from '@/components/cards/summary-card';
import { Banknote, Briefcase, MoveDownRight, MoveUpRight, PiggyBank, PlayIcon, Wallet2 } from 'lucide-react';

// import { formatCurrency } from '@/lib/formatter';

import { useOverview } from '@/components/context/overview-provider';


export default function Summary () {

    const { data, loading } = useOverview();

    const totalExpenses = data.expenses.length > 0  ? data.expenses.reduce((acc: any, { price }: any) => Number(price) + acc, 0) : 0;
	const totalIncome =  data.income.length > 0  ? data.income.reduce((acc: any, { amount }: any) => Number(amount) + acc, 0) : 0;
	const totalInvesments = data.investments.length > 0 ? data.investments.reduce(
		(acc: any, { price, units }: any) => Number(price) * Number(units) + acc,
		0
	) : 0;
	// const totalSubscriptions = data.subscriptions.length > 0 ? data.subscriptions.reduce(
	// 	(acc: any, { price, paid_dates }: any) => Number(price) * paid_dates.length + acc,
	// 	0
	// ): 0;
    const totalSubscriptions = 1000;

    // const totalExpenses = 40000;
    // const totalInvesments = 30000;
    // const totalSubscriptions = 30000;
    // const totalIncome = 50000;
	const totalSpent = totalExpenses + totalInvesments + totalSubscriptions;
	const totalBalance = totalIncome - totalSpent;

    return (
        <>
        <h2 className="mb-4 font-semibold text-primary dark:text-white">Summary</h2>

        <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
            <SummaryCard icon={Briefcase} title="total income" data={totalIncome || 40000} />
            <SummaryCard icon={Wallet2} title="available balance" data={totalBalance || 20000} />
            <SummaryCard icon={Banknote} title="total spent" data={totalExpenses || 2000} />
            <SummaryCard icon={PiggyBank} title="total investment" data={totalInvesments || 6000} />
            <SummaryCard icon={PlayIcon} title="total subscription" data={totalSubscriptions || 3} />
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