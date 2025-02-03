import { dateFormat } from '@/constants/date';

const defaultCurrency = 'INR';
const defaultLocale = 'en-IN';
const defaultDateStyle = { day: '2-digit', month: 'short', year: 'numeric' };
const timeStyle = { hour: 'numeric', minute: 'numeric' };
const currencyStyle = { style: 'currency', currency: '', minimumFractionDigits: 0, maximumFractionDigits: 2 };

type Currency = {
	value: number | bigint;
	currency?: string;
	locale?: any;
};

type Date = {
	date: string;
	locale?: string;
	dateStyle?: any;
};



// export const formatCurrency = ({ value, currency = defaultCurrency, locale = defaultLocale }: Currency): any => {
// 	try {
// 		return new Intl.NumberFormat(locale, { ...currencyStyle, currency }).format(value).replace(/^(\D+)/, '$1 ');
// 	} catch {
// 		return value;
// 	}
// };

export const formatTotalAmountCurrency = (data: { amount: number }[], currency: string = 'Rs.', locale: string = 'en-IN'): string => {
	const totalAmount = data.reduce((acc, item) => {
			const amount = Number(item.amount);
			return acc + (isNaN(amount) ? 0 : amount)
	}, 0);
	// console.log('totalAmount', totalAmount);
	return `${currency} ${totalAmount.toLocaleString(locale)}`;
};


export const formatTotalPriceCurrency = (data: { price: number }[], currency: string = 'Rs.', locale: string = 'en-IN'): string => {
	const totalAmount = data.reduce((acc, item) => {
			const amount = Number(item.price);
			return acc + (isNaN(amount) ? 0 : amount)
	}, 0);
	// console.log('totalAmount', totalAmount);
	return `${currency} ${totalAmount.toLocaleString(locale)}`;
};


export const formatDate = ({ date, locale = defaultLocale, dateStyle = defaultDateStyle }: Date): any => {
	try {
		return new Intl.DateTimeFormat(locale, dateStyle).format(new Date(date));
	} catch {
		return date;
	}
};

// export const getCurrencySymbol = (
// 	currency: string = defaultCurrency,
// 	locale: string = defaultLocale
// ): String | undefined => {
// 	try {
// 		return new Intl.NumberFormat(locale, { ...currencyStyle, currency })
// 			?.formatToParts(1)
// 			?.find((x) => x.type === 'currency')?.value;
// 	} catch {
// 		return '';
// 	}
// };
