'use client';

import { createContext, useContext } from 'react';

import { format } from 'date-fns';
import useSWR from 'swr';

import { getExpenses } from '@/services/expense';
import { apiUrls } from '@/lib/apiUrls';

import { dateFormat } from '@/constants/date';
import { getInvestments } from '@/services/investments';
import { getIncome } from '@/services/income';
import { getSubscriptions } from '@/services/subscriptions';

// import { useDate } from '@/datepicker-provider';

const OverviewContext = createContext(null);

interface Data {
	expenses: Array<any>;
	income: Array<any>;
	subscriptions: Array<any>;
	investments: Array<any>;
}

export const OverviewContextProvider = (props: any) => {
	// const { date } = useDate();
	// const from = format(date.from || date.to, dateFormat);
	// const to = format(date.to || date.from, dateFormat);
	const { children, ...others } = props;
	const {
		data: expensesData = [],
		isLoading: isExpenseLoading,
		mutate: mutateExpenses,
	} = useSWR('fetchExpenses', getExpenses);
	const { data: investmentsData = [], isLoading: isInvestmentsLoading } = useSWR(
		'fetchInvestments', getInvestments
	);
	const { data: incomeData = [], isLoading: isIncomeLoading } = useSWR('fetchIncome', getIncome);
	const { data: subscriptionsData = [], isLoading: isSubscriptionsLoading } = useSWR(
	   'fetchSubscriptions', getSubscriptions
	);

	const data = {
		expenses: expensesData,
		investments: investmentsData,
		income: incomeData,
		subscriptions: subscriptionsData,
		mutate: {
			mutateExpenses,
		},
	};
	const loading = isExpenseLoading || isInvestmentsLoading || isIncomeLoading || isSubscriptionsLoading;

	return (
		<OverviewContext.Provider value={{ loading, data }} {...props}>
			{children}
		</OverviewContext.Provider>
	);
};

export const useOverview = () => {
	const context = useContext<any>(OverviewContext);
	if (context === undefined) {
		throw new Error(`useUser must be used within a OverviewContext.`);
	}
	return context;
};
