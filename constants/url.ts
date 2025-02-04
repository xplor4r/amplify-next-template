import { getRangeDateForFilter } from './date';

const isProduction = process.env.NODE_ENV === 'production';
console.log('isProduction >>', isProduction);
const domain = process.env.NEXT_PUBLIC_PROJECT_URL;

const local = 'localhost:3000';
const home = isProduction ? domain : local;

import { views } from './table';
export const url = {
	serverApi: `${isProduction ? domain : 'http://'}${home}`,
};


export const getApiUrl = (filterKey: string, apiPath: string, categories: string[] = [], isNotRange = false) => {
	if (isNotRange) {
		return `/api/${apiPath}`;
	}

	if (filterKey === views.all.key) {
		return `/api/${apiPath}?categories=${categories?.join(',')}`;
	}

	const [start, end] = getRangeDateForFilter(filterKey);
	return `/api/${apiPath}?from=${start}&to=${end}&categories=${categories?.join(',')}`;
};
